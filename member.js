function skillsMember() {}
skillsMember.prototype = new skills();
skillsMember.prototype.constructor = skillsMember;
skillsMember.prototype.parent = skills.prototype;
skillsMember.prototype.init = function() {
    this.parent.init.call(this);
    console.log('skillsMember init');
}
skillsMember.prototype.show = function() {
    this.parent.show.call(this);
    console.log('skillsMember show');
}