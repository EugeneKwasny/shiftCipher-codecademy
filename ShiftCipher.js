// Write class below
class ShiftCipher{
    constructor(shift){
      this._shift = shift;
      this._aIndex = 'a'.charCodeAt();
      this._zIndex = 'z'.charCodeAt();
    }
  
    encrypt(string){
      string =  string.toLowerCase();
      const encodedString = [];

      for(const char of string){
        if(char.charCodeAt() >= this._aIndex && char.charCodeAt() <=this._aIndex){
            let newCharCode = char.charCodeAt()+this._shift
            if(newCharCode>zIndex){
                newCharCode = newCharCode-zIndex === 1 
                            ? this._aIndex 
                            : this._aIndex + (newCharCode-this._zIndex-1);
            }
            encodedString.push(String.fromCharCode(newCharCode))
        }else{
          encodedString.push(char)
        }
  
      }
      return encodedString.join('').toUpperCase();
    }

    decrypt(string){
        string =  string.toLowerCase();
      const encodedString = [];

      for(const char of string){
        if(char.charCodeAt() >= this._aIndex && char.charCodeAt() <=this._zIndex){
            let newCharCode = char.charCodeAt()-this._shift
            if(newCharCode<this._aIndex){
                newCharCode = this._aIndex - newCharCode === 1 
                            ? this._zIndex 
                            : this._zIndex - (this._aIndex - newCharCode - 1);
            }
            encodedString.push(String.fromCharCode(newCharCode))
        }else{
          encodedString.push(char)
        }
  
      }
      return encodedString.join('');
    }
}
  
module.exports = ShiftCipher;