/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Rayan Rondez
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let celsius = Number (prompt('Temperature en celsius:') );

  if(isNaN(celsius)){
    alert('Veuillez entrez une temperature valide !');
  }
  else{
    alert(`${celsius}°C = ${celsius * 9 / 5 + 32}°F`);
  }

}()); // Main IIFE

