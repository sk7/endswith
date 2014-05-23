// https://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string

if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = function (str){
    return this.slice(-str.length) == str;
  };
}

if (typeof String.prototype.endsWithIgnoreCase != 'function') {
  String.prototype.endsWithIgnoreCase = function (str){
    return this.slice(-str.length).toLowerCase() == str.toLowerCase();
  };
}
