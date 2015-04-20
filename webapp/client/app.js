if ( Meteor.isClient ) {

	/*
	 Put contents of $(document).ready(function(){ .. } here
	 Replace $(this) with this
	 Replace $(...) selector with this.$(..)

	 So, original script :
		$(document).ready(function(){  // off-canvas sidebar toggle
			$('[data-toggle=offcanvas]').click(function() {
			  	$(this).toggleClass('visible-xs text-center');
			    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
			    $('.row-offcanvas').toggleClass('active');
			    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
			    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
			    $('#btnShow').toggle();
			});
		});
	Now becomes:
	*

	Template.body.rendered = function(){
		if (!this.renderedOnce){
			console.log("On document ready..");
			this.$('[data-toggle=offcanvas]').click(function(){
				console.log("On offcanvas toggle..");
			  	this.toggleClass('visible-xs text-center');
			    this.find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
			    this.$('.row-offcanvas').toggleClass('active');
			    this.$('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
			    this.$('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
			    this.$('#btnShow').toggle();
			});
			this.renderedOnce=true;
		}
	}; 
	*/
}

