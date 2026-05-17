(function(){"use strict";self.addEventListener("message",async n=>{const{id:t,script:s,state:a,action:c}=n.data;try{let e=s;e.includes("export default")&&(e=e.replace(/export\s+default\s+/,"").trim());const i=new Function("state","action",`
            "use strict";
            // Restrict access to global scope
            const self = undefined;
            const window = undefined;
            const globalThis = undefined;
            
            // Re-assign the function body
            let handler;
            try {
                handler = eval('(' + ${JSON.stringify(e)} + ')');
                if (typeof handler !== 'function') {
                    // Try evaluating as a raw function declaration
                    handler = ${e};
                }
            } catch(e) {
                handler = ${e};
            }
            return handler(state, action);
        `),r=JSON.parse(JSON.stringify(a||{})),o=i(r,c);self.postMessage({id:t,state:o})}catch(e){self.postMessage({id:t,error:e.message})}})})();
