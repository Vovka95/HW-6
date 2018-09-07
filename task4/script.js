if (!Function.prototype.bind) {
	Function.prototype.bind = function(context){
		
		let func = this;
		let args = Array.prototype.slice.call(arguments, 1);

		let pBind =  function() {
			return func.apply(context, args.concat(Array.prototype.slice.call(arguments)));
      };

      return pBind;
	};
};
   
        
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};


var boundGetX = module.getX.bind(module);
console.log(boundGetX()); 

