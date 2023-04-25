({
    //using method from MamacoAccounts Apex Class
    getAccount2 : function(component) {
        let action = component.get("c.getAccount2");
        
        //using 'response' to recieve server confirmation through setCallback
        action.setCallback(this,function(response){
            let state = response.getState();
            console.log(state);
            
            if(state == "SUCCESS"){
                component.set("v.accs", response.getReturnValue());
                console.log(response.getReturnValue());
                
            }
            
        }); 
        //enqueueing server actions
        $A.enqueueAction(action);
    }
})
