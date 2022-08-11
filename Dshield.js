//Devtool Shield 
//Author:inoxt
//Github:@coco_droid
const Dshield={
	//define variables 
	isOpen:false,
	isnotify:false,
	unauthorized:{},
	orientation:undefined,
	data:{},
	threshold :160,
	start:function(callback=function(){},callback2=function(){}){
		this.f12(callback);
		this.firstway(callback);
	    this.secondway(callback);
		this.mutation(callback2);
	},
	f12:function(callback){ 
            //detect event f12 key 
            document.addEventListener('keydown',function(e){
                //if f12 key is pressed
                if(e.keyCode==123){
				  this.isOpen=!this.isOpen;

                  callback();
                }
            }
            )
    }
	,firstway:function(callback){
		callback = callback || function(){};
			//detect with first way to detect detector 1
			const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > this.threshold;
			const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > this.threshold;
			const orientation = widthThreshold ? 'vertical' : 'horizontal';
			if (!(heightThreshold && widthThreshold) && ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
				if ((this.isOpen || this.orientation !== orientation) && true) {
					this.isOpen = true;
				this.orientation = orientation;
				console.log(this.orientation);
					this.organizeData(callback);
				}
				//console.log('open');
			}
			else {
				if (this.isOpen && true) {
					callback();
						}
                //console.log('first way to detect devtools is not working');
				this.isOpen = false;
				this.orientation = undefined;
			}

		}
		,secondway:function(callback){
			callback = callback || function(){};
			//detect with second way to detect detector 2
			!function() {
				function detectDevTool(allow) {
					if(isNaN(+allow)) allow = 100;
					var start = +new Date(); // Validation of built-in Object tamper prevention.
					debugger;
					var end = +new Date(); // Validates too.
					if(isNaN(start) || isNaN(end) || end - start > allow) {
						// input your code here when devtools detected.
						Dshield.isOpen = true;
						if(Dshield.orientation==undefined){
							Dshield.orientation='separate';
						}
						Dshield.organizeData(callback);
					}
				}
				if(window.attachEvent) {
					if (document.readyState === "complete" || document.readyState === "interactive") {
						detectDevTool();
						window.attachEvent('onresize', detectDevTool);
						window.attachEvent('onmousemove', detectDevTool);
						window.attachEvent('onfocus', detectDevTool);
						const threshold = 160;	window.attachEvent('onblur', detectDevTool);
					} else {
						setTimeout(argument.callee, 0);
					}
				} else {
					window.addEventListener('load', detectDevTool);
					window.addEventListener('resize', detectDevTool);
					window.addEventListener('mousemove', detectDevTool);
					window.addEventListener('focus', detectDevTool);
					window.addEventListener('blur', detectDevTool);
				}
			}();
		}
        ,mutation:function(callback){
         //detect unauthorised mutation
		 var sysDshield = document.getElementsByTagName('sysDshield');
			//DOm MUtation event
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;	
         //observe mutation for all sysDshield elements
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if(mutation.addedNodes.length > 0) {
					for(var i = 0; i < mutation.addedNodes.length; i++) {
						if(mutation.addedNodes[i].nodeType === 1) {
							if(mutation.addedNodes[i].tagName === 'sysdshield') {
								console.log('unauthorised mutation detected');
		                        //add in unauthorized mutation object
								Dshield.unauthorized[mutation.addedNodes[i].id]=mutation.addedNodes[i];
                                Dshield.organizeData(callback);
							}
						}
						//detect if other elements like scipts,iframes,stylesheets are added
						if(mutation.addedNodes[i].nodeType === 3) {
							Dshield.unauthorized[mutation.addedNodes[i].parentElement.id]=mutation.addedNodes[i].parentElement;
							Dshield.organizeData(callback);
						}
					}
				}
			});
		}
		);
		observer.observe(document, {
			subtree: true,
			childList: true
		});
        }  
		,caution:function(type)	{
			//get type of message to display 
			const style = 'color:#AA0000; font-style: italic;font-size: 2.3em;'
                console.log("%c🛡️ Dshield", style);
			if(type=='warning'){
				const style1 = 'background-color: #d2c057; color: #AA0000;   font-size: 1.2em;'
                console.log("%cWarning", style1);
				const style2 = 'background-color: #00000; color: #00AA00;   font-size: 1.5em;';
				console.log("%c⛔ You are not allowed to use this tool on this website", style2);
			}
		//cautions for the user
		else if(type=='caution'){
			const style1 = 'background-color: #d2c057; color: #AA0000;   font-size: 1.2em;'
			console.log("%cCaution", style1);
			const style2 = 'background-color: #00000; color: #00AA00;   font-size: 1.5em;';
			//caution message:do not copy and paste lines of code or anything else here hackers can steal your data
			console.log("%c⚠️⚠️ Do not copy and paste lines of code or anything else here hackers can steal your data", style2);
		}
		//felication and hire because he is curious
		else if(type=='felication'){
			const style1 = 'background-color: #d2c057; color: #AA0000;   font-size: 1.2em;'
			console.log("%cCongratulation", style1);
			//felicitation f you're reading this, you're amazing! You're curious and Dshield loves working with people like you. Click this link to learn more.
			const style2 = 'background-color: #00000; color: #00AA00;   font-size: 1.5em;';
			console.log("%c‼ If you're reading this, you're amazing! You're curious and Dshield loves 🤗 working with people like you. Click this link👉 to learn more.", style2);
		}
		//report bug
		else if(type=='report'){
			const style1 = 'background-color: #d2c057; color: #AA0000;   font-size: 1.2em;'
			console.log("%cReport", style1);
			const style2 = 'background-color: #00000; color: #00AA00;   font-size: 1.5em;';
			console.log("%c‼ If you are viewing this message, you are likely a curious individual. If you encounter any errors or have suggestions, please do not hesitate to contact us👉.", style2);
		}
	}
	//collect this data and send it to the server
	,collectData:function(url,callback){
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				callback(xhr.responseText);
			}
		}
		xhr.send(JSON.stringify(this.data));
	}
	,organizeData:function(callback)
	{
		let data = {};
		//detect if this.orientation is undefined to set''
		data.orientation=(this.orientation==undefined)?'':this.orientation;
		data.isOpen = this.isOpen;
		data.unauthorized = this.unauthorized;
		data.isnotify = this.isnotify;
		console.log(data);
		//rassamble the data into a single object with timestamp and data
		this.data[Date()] = data;
		callback();
	}
}

