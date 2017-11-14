function Message(body, foreground, background)
{
    this.body = body || '';
    this.foreground = foreground || '#FFFFFF';
    this.background = background || '#000000';
}

Message.prototype.toString = function(){
    return "%c{" + this.foreground + "}%b{" + this.background + "}" + this.body;
}

module.exports = Message;
