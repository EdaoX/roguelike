function Menu(){
    this.choices = [];
    this.current = 0;
}

Menu.prototype.next = function(){
    this.current = (this.choices[this.current + 1]) ? this.current + 1 :  0;
}

Menu.prototype.previous = function(){
    this.current = (this.choices[this.current - 1]) ? this.current - 1 :  this.choices.length - 1;
}

Menu.prototype.trigger = function(){
    var chosen =  this.choices[this.current];
    if(chosen.action)
        chosen.action();
}

Menu.prototype.add = function(label, action){
    this.choices.push({
        label  : label,
        action : action
    });
}

module.exports = Menu;
