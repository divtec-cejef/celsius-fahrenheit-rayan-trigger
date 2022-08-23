/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let celsius = Number (prompt('Temperature en celsius: ${celsius}') );

  if(isNaN(celsius)){
    alert('Veuillez entrez une temperature valide !');
  }
  else{
    alert('${celsius} = ${celsius * 9 / 5 + 32}');
  }

}()); // Main IIFE

