/* ==========================================================================
   Naam: loc_biblio_pwa_01.js
   ========================================================================== */
/* ========================================================================== */
function loc_block_lavinia_footer_11G_openings_get(vakantie_tijd) {

  let terug_tekst = "";  

  if (vakantie_tijd == "true") {
    terug_tekst = loc_json_footer_lavinia_11_openings_02;
  } else {  
    terug_tekst = loc_json_footer_lavinia_11_openings_01;
  }

  return terug_tekst;
}
/* ========================================================================== */  
function generate_prose(json_configuratie) {

  let tpl_gen_prose = `
    Vervallen verplaatst naar lavinia_01_git
  `;

  return tpl_gen_prose;
}
/* ======================================================================= */
function generate_serviceworker(json_configuratie) {

  let tpl_serviceworker_01 = `
    {
      /**
       * @license
       * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
       */
      console.info('Service worker disabled for development, will be generated at build time.');
    }`;

  let templGenString = _.template(tpl_serviceworker_01);
  let compGenString  = templGenString({ json_configuratie });

  return compGenString;
}
/* ========================================================================== */
/* ========================================================================== */
