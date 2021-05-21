// Write class below
class ShiftCipher{
    constructor(shift){
      this._shift = shift;
    }
  
    encrypt(string){
      string =  string.toLowerCase();
      const encodedString = [];
      const aIndex = 'a'.charCodeAt();
      const zIndex = 'z'.charCodeAt();

      for(const char of string){
        if(char.charCodeAt() >= aIndex && char.charCodeAt() <=zIndex){
            let newCharCode = char.charCodeAt()+this._shift
            if(newCharCode>zIndex){
                newCharCode = newCharCode-zIndex === 1 
                            ? aIndex 
                            : aIndex + (newCharCode-zIndex-1);
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
      const aIndex = 'a'.charCodeAt();
      const zIndex = 'z'.charCodeAt();

      for(const char of string){
        if(char.charCodeAt() >= aIndex && char.charCodeAt() <=zIndex){
            let newCharCode = char.charCodeAt()-this._shift
            if(newCharCode<aIndex){
                newCharCode = aIndex - newCharCode === 1 
                            ? zIndex 
                            : zIndex - (aIndex - newCharCode - 1);
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