 var fsapi
        fsapi = (function (undefined) {
            var dom, enter, exit, fullscreen

            // support for entering fullscreen
            dom = document.createElement('reza')
            if ('requestFullscreen' in dom) {
                enter = 'requestFullscreen' // W3C proposal
            }
            else if ('requestFullScreen' in dom) {
                enter = 'requestFullScreen' // mozilla proposal
            }
            else if ('webkitRequestFullScreen' in dom) {
                enter = 'webkitRequestFullScreen' // webkit
            }
            else if ('mozRequestFullScreen' in dom) {
                enter = 'mozRequestFullScreen' // firefox
            }
            else {
                enter = undefined // not supported in this browser
            }

            // support for exiting fullscreen
            if ('exitFullscreen' in document) {
                exit = 'exitFullscreen' // W3C proposal
            }
            else if ('cancelFullScreen' in document) {
                exit = 'cancelFullScreen' // mozilla proposal
            }
            else if ('webkitCancelFullScreen' in document) {
                exit = 'webkitCancelFullScreen' // webkit
            }
            else if ('mozCancelFullScreen' in document) {
                exit = 'mozCancelFullScreen' // firefox
            }
            else {
                exit = undefined // not supported in this browser
            }

            // support for detecting when in fullscreen
            if ('fullscreen' in document) {
                fullscreen = 'fullscreen' // W3C proposal
            }
            else if ('fullScreen' in document) {
                fullscreen = 'fullScreen' // mozilla proposal
            }
            else if ('webkitIsFullScreen' in document) {
                fullscreen = 'webkitIsFullScreen' // webkit
            }
            else if ('mozFullScreen' in document) {
                fullscreen = 'mozFullScreen' // firefox
            }
            else {
                fullscreen = undefined // not supported in this browser
            }

            return {
                enter      : enter,
                exit       : exit,
                fullscreen : fullscreen
            }
        }())

        // display support message
        var support
        support = document.getElementById('support')
        if (fsapi.enter && fsapi.exit && fsapi.fullscreen) {
            support.innerHTML = '<p>Your browser supports fullscreen mode using the following methods and properties: element.' + fsapi.enter + '(), document.' + fsapi.exit + '(), and document.' + fsapi.fullscreen + '.</p>'
            // enable toggling fullscreen mode
            document.getElementById('fstoggle').addEventListener('click', function (evt) {
                var img
                img = this
                if (document[fsapi.fullscreen]) {
                    document[fsapi.exit]()
                    setTimeout(function () {
                        img.className = ''
                    }, 0)
                }
                else {
                    img[fsapi.enter]()
                    setTimeout(function () {
                        img.className = 'fullscreen'
                    }, 0)
                }
            }, false)
        }
        else {
            support.className = 'bad'
            support.innerHTML = '<p>Your browser appears to <strong>not support</strong> fullscreen mode.</p>'
        }