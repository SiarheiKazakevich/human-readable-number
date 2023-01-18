module.exports = function toReadable(number) {
   let tens;
   let units = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: "four",
      5: 'five',
      6: 'six',
      7: "seven",
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      19: 'nineteen',
      18: 'eighteen',
   };
   if (20 <= number) {
      tens = {
         20: 'twenty',
         30: 'thirty',
         40: 'forty',
         50: 'fifty',
         60: 'sixty',
         70: 'seventy',
         80: 'eighty',
         90: 'ninety',
      };
      let num = String(number).split('');
      if (num.length === 2)
         if (number % 10 == 0) {
            return tens[number];
         } else {
            if (num[0] == 2) {
               return 'twenty' + ' ' + units[num[1]];
            }
            if (num[0] == 3) {
               return 'thirty' + ' ' + units[num[1]];
            }
            if (num[0] == 4) {
               return 'forty' + ' ' + units[num[1]];
            }
            if (num[0] == 5) {
               return 'fifty' + ' ' + units[num[1]];
            }
            if (num[0] == 6) {
               return 'sixty' + ' ' + units[num[1]];
            }
            if (num[0] == 7) {
               return 'seventy' + ' ' + units[num[1]];
            }
            if (num[0] == 8) {
               return 'eighty' + ' ' + units[num[1]];
            }
            if (num[0] == 9) {
               return 'ninety' + ' ' + units[num[1]];
            }
         }
   } else {
      return units[number];
   }


}
