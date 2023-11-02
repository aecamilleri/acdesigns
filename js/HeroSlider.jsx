
        $('.slide-nav').on('click', function(e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
        // get button data-slide
        next = $(this).data('slide');

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    if (current === next) {
        return false;
    } else {
        $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
    }
    });
  
        // Función para cambiar las diapositivas
        function cambiarDiapositiva() {
        var current = $('.flex--active').data('slide');
        var totalSlides = $('.slide-nav').length;
        var next = (current % totalSlides) + 1;

        $('.slide-nav').removeClass('active');
        $('.slide-nav[data-slide=' + next + ']').addClass('active');

        if (current === next) {
            return false;
        } else {
            $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
            $('.flex--active').addClass('animate--end');
            setTimeout(function() {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
            }, 800);
        }
        }

        // Intervalo de tiempo en milisegundos (por ejemplo, 10000 para 10 segundos)
        var intervaloTiempo = 10000;

        // Función para cambiar las diapositivas automáticamente
        setInterval(cambiarDiapositiva, intervaloTiempo);
