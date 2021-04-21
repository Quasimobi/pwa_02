/* ==========================================================================
 *
 * Naam: defa_biblio_bs4.js
 * Default script dat ik elk programma gebruikt wordt.
  =========================================================================== */
/**
 * Zie Lodash.txt
 */
// _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
/* ========================================================================== */
/**
 * @name render_template_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} tpl_totaal
 * @param  {} sanitize moet de template schoon gemaakt geworden?
 * @description Voeg de template toe aan de dom.<br>
 * @description https://github.com/cure53/DOMPurify
 */
function render_template_01(anker_id, tpl_totaal, sanitize = false) {

  let tpl_klaar = "";

  if (sanitize) {
    tpl_klaar = DOMPurify.sanitize(tpl_totaal);
  }
  else {
    tpl_klaar = tpl_totaal;      
  }  
  document.getElementById(anker_id).innerHTML = tpl_klaar;
}  
/* ========================================================================== */
/**
 * @name render_template_02
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} tpl_totaal
 * @param  {} sanitize Hier om zonder problemen render_template_01 te wijzigen in de _02
 * @description Toon een knop waarmee de template in een tekst bestand getoond wordt.
 */
function render_template_02(anker_id, tpl_totaal, sanitize = false) {
  let tpl_klaar = "";  
  let knop_tekst = anker_id+".txt";
  let anker_id_02 = anker_id+"02";
  let anker_button = "<button id="+anker_id_02+">"+knop_tekst+"</button>";
  document.getElementById(anker_id).innerHTML = anker_button;

  if (sanitize) {
    tpl_klaar = DOMPurify.sanitize(tpl_totaal);
  }
  else {
    tpl_klaar = tpl_totaal;      
  }  

  toonInhoud_01(anker_id_02, tpl_klaar, knop_tekst);
}
/* ========================================================================== */
function render_template_03(anker_id, tpl_totaal, sanitize = false) {

  if (glint_save_includes) {
    render_template_02(anker_id, tpl_totaal, sanitize);
  }
  else       
  {
    render_template_01(anker_id, tpl_totaal, sanitize);
  }
}
/* ========================================================================== */
/**
 * @param  {} anker_id
 */
/* TODO:  de images moeten een doorschijnende ag hebben, maar zelf maken.
Ik zal ook een eigen images dir moeten voor de skeletten
zie bij starter nuxt voor een logo in de vorm van svg
 */
function render_skelet_xxll_image(anker_id) {

}
/* ========================================================================== */
/**
 * @name log_script
 * @function
 * @global
 */
function log_script() {
  document.querySelector('#log_script').textContent += Array.prototype.join.call(arguments, '') + '\n';
}
/* ========================================================================== */
/**
 * @name log_error_01
 * @function
 * @global
 * @description Voorlopig gaat het naar de console.
 */
function log_error_01(fout, error) {
  let log_fout = fout+"---Fout:"+error;
  console.log(log_fout);
}
/* ========================================================================== */
/**
 * @name addClassName
 * @function
 * @global
 * @description Vanilla, toevoegen van een Class aan een regel met een Id.
 */
function addClassName(element_name, class_name) {
  var element, arr;
  element = document.getElementById(element_name);
  arr = element.className.split(" ");
  if (arr.indexOf(class_name) == -1) {
    element.className += " " + class_name;
  }
}
/* ========================================================================== */
/**
 * @name docu_class_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_class_01
 */
function docu_class_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<pre><div class="docu_class_01">`;
  tpl_docu_string = tpl_docu_string+`<h1>Class</h1>`;

  let basis_string = docu_basis_01(docu_kode_01);

  tpl_docu_string = tpl_docu_string+basis_string;

  tpl_docu_string = tpl_docu_string+`</div></pre>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}
/* ========================================================================== */
/**
 * @name docu_basis_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_kode_01
 * @description soort: template, wrapper, snippets, script of block.
 */
function docu_basis_01(docu_kode_01) {

  let tpl_docu_string = ``;

  if (docu_kode_01.naam_nuxt != undefined) {
    tpl_docu_string = tpl_docu_string+`Naam_nuxt:    ${ docu_kode_01.naam_nuxt }<br>`;
  }

  if (docu_kode_01.naam_jekyll != undefined) {
    tpl_docu_string = tpl_docu_string+`Naam_jekyll:  ${ docu_kode_01.naam_jekyll }<br>`;
  }

  if (docu_kode_01.wrapper != undefined) {
    tpl_docu_string = tpl_docu_string+`Wrapper:      ${ docu_kode_01.wrapper }<br>`;
  }

  if (docu_kode_01.klasse != undefined) {
    tpl_docu_string = tpl_docu_string+`Klasse:       ${ docu_kode_01.klasse }<br>`;
  }

  if (docu_kode_01.klasse != undefined) {
    tpl_docu_string = tpl_docu_string+`Gebruikt bij: ${ docu_kode_01.gebruikt_jekyll }<br>`;
  }

  tpl_docu_string = tpl_docu_string+`Omschrijving: ${ docu_kode_01.omschrijving_01 }<br>`;

  if (docu_kode_01.omschrijving_02 != undefined) {
    tpl_docu_string = tpl_docu_string+`              ${ docu_kode_01.omschrijving_02 }<br>`;
  }

  if (docu_kode_01.omschrijving_03 != undefined) {
    tpl_docu_string = tpl_docu_string+`              ${ docu_kode_01.omschrijving_03 }<br>`;
  }

  if (docu_kode_01.omschrijving_04 != undefined) {
    tpl_docu_string = tpl_docu_string+`              ${ docu_kode_01.omschrijving_04 }<br>`;
  }

  if (docu_kode_01.omschrijving_05 != undefined) {
    tpl_docu_string = tpl_docu_string+`              ${ docu_kode_01.omschrijving_05 }<br>`;
  }

  return tpl_docu_string;
}
/* ========================================================================== */
function docu_render_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<div class="container"><div class="row"><div class="col-always-12A"><div class="docu_render_01">`;
  tpl_docu_string = tpl_docu_string+`<h5>Render</h5>`;

  let basis_string = docu_basis_01(docu_kode_01);

  tpl_docu_string = tpl_docu_string+basis_string;

  tpl_docu_string = tpl_docu_string+`</div></div></div></div>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}
/* ========================================================================== */
function docu_template_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<pre><div class="docu_template_01">`;
  tpl_docu_string = tpl_docu_string+`<h1>Template</h1>`;

  let basis_string = docu_basis_01(docu_kode_01);

  tpl_docu_string = tpl_docu_string+basis_string;

  tpl_docu_string = tpl_docu_string+`</div></pre>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}
/* ========================================================================== */
/**
 * @name docu_wrapper_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_kode_01
 * @description <pre class="docu_wrapper_01" id="${anker_id}"></pre>
 */
function docu_wrapper_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<div class="container"><div class="row"><div class="col-always-12A"><div class="docu_wrapper_01">`;
  tpl_docu_string = tpl_docu_string+`<h5>Wrapper</h5>`;

  let basis_string = docu_basis_01(docu_kode_01);

  tpl_docu_string = tpl_docu_string+basis_string;

  tpl_docu_string = tpl_docu_string+`</div></div></div></div>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}
/* ========================================================================== */
/**
 * @name docu_combi_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_combi_01
 */
function docu_combi_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<pre><div class="docu_combi_01">`;
  tpl_docu_string = tpl_docu_string+`<h3>Combi</h3>`;

  let basis_string = docu_basis_01(docu_kode_01);

  tpl_docu_string = tpl_docu_string+basis_string;

  tpl_docu_string = tpl_docu_string+`</div></pre>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}
/* ========================================================================== */
/**
 * @name docu_snippet_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_kode_01
 */
function docu_snippet_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<pre><div class="docu_snippet_01">`;
  tpl_docu_string = tpl_docu_string+`<h3>Snippet</h3>`;

  let basis_string = docu_basis_01(docu_kode_01);


  tpl_docu_string = tpl_docu_string+basis_string;

  tpl_docu_string = tpl_docu_string+`</div></pre>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}
/* ========================================================================== */
/**
 * @name docu_script_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} docu_script_01
 */
function docu_script_01(anker_id, docu_script_01) {
  let tpl_docu_string = `
    <pre>
    <div class="docu_script_01">
      <h3>Script</h3>
      Naam:         <%= docu_script_01.naam %>
      Omschrijving: <%= docu_script_01.omschrijving %>
    </div>
    </pre>
  `;

  let templDocuString = template.compile(tpl_docu_string);
  let compDocuString = templDocuString({ docu_script_01});

  document.getElementById(anker_id).innerHTML = compDocuString;
}
/* ========================================================================== */
/* ========================================================================== */
/**
 * @name docu_algemeen_01
 * @param  {} anker_id
 * @param  {} docu_script_01
 * @description Algemeen block documentatie, alleen omschrijvingen.
 */
function docu_algemeen_01(anker_id, docu_kode_01) {

  let tpl_docu_string = `<pre><div class="docu_algemeen_01">`;
  tpl_docu_string = tpl_docu_string+`<h1>Algmeen</h1>`;

  let basis_string = docu_basis_01(docu_kode_01);

  tpl_docu_string = tpl_docu_string+basis_string;

  tpl_docu_string = tpl_docu_string+`</div></pre>`;
  document.getElementById(anker_id).innerHTML = tpl_docu_string;
}
/* ========================================================================== */
/**
 * @name toonInhoud_01
 * @function
 * @global
 * @param  {} anker_id
 * @param  {} inhoud
 * @param  {} bestandnaam - default toon.txt
 * @example netjes maken
*<button id="id_toon_01">toon.txt</button>
* <script>
*  toonInhoud_01("id_toon_01", data_snip_33.kop);
* </script>
 */
function toonInhoud_01(anker_id, inhoud, bestandnaam) {
  var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };

  var create = document.getElementById(anker_id);

  create.addEventListener('click', function () {
    var link = document.createElement('a');
    link.setAttribute('download', bestandnaam);
    link.href = makeTextFile(inhoud);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
		});

  }, false);
}
/* ========================================================================== */
/**
 * @name toon_configuratie
 * @function
 * @global
 * @param  {} json_configuratie
 * @description zie bij helena_defa _data: basis_defa, configuratie_defa en centobytes
 */
function toon_configuratie(json_configuratie) {

  let tpl_config_01 = `
    loc_site_testen:               ${ json_configuratie.glint_site_testen }
    loc_url_rel:                   ${ json_configuratie.glint_url_rel }
    loc_url_abs:                   ${ json_configuratie.glint_url_abs }
    loc_use_art:                   ${ json_configuratie.glint_use_art }
    loc_use_manifest:              ${ json_configuratie.glint_use_manifest }
    loc_meta_robots:               ${ json_configuratie.glint_meta_robots }
    loc_path_bedrijf_media:        ${ json_configuratie.glint_path_bedrijf_media }
    loc_path_bedrijf_media_upload: ${ json_configuratie.glint_path_bedrijf_media_upload }        
    loc_path_bedrijf_media_post:   ${ json_configuratie.glint_path_bedrijf_media_post }
    loc_path_css:                  ${ json_configuratie.glint_path_css }
    loc_path_icons:                ${ json_configuratie.glint_path_icons }
    loc_path_json:                 ${ json_configuratie.glint_path_json }
    loc_path_js_glint:             ${ json_configuratie.glint_path_js_glint }
    loc_path_js_vendor:            ${ json_configuratie.glint_path_js_vendor }
    loc_github_upload_yes:         ${ json_configuratie.glint_github_upload_yes }
    loc_github_url_abs:            ${ json_configuratie.glint_github_url_abs }
  `;

  return tpl_config_01;
}
/* ========================================================================== */
/**
 * @name toon_bedrijf
 * @function
 * @global
 * @param  {} json_bedrijf
 */
/* TODO: tawk is veranderd zie glint_03 */
function toon_bedrijf(json_bedrijf) {

  let tpl_bedrijf_01 = `
    loc_website_title:           ${ json_bedrijf.website_title }
    loc_meta_description:        ${ json_bedrijf.meta_description }
    loc_company_name_bedrijf:    ${ json_bedrijf.company_name_bedrijf }
    loc_meta_keywords_bedrijf:   ${ json_bedrijf.meta_keywords_bedrijf }
    loc_merk_tekst:              ${ json_bedrijf.merk_tekst }
    loc_merk_link:               ${ json_bedrijf.merk_link }    
    loc_adres_straat_bedrijf:    ${ json_bedrijf.adres_straat_bedrijf }
    loc_adres_huisnr_bedrijf:    ${ json_bedrijf.adres_huisnr_bedrijf }
    loc_adres_postcode_bedrijf:  ${ json_bedrijf.adres_postcode_bedrijf }
    loc_adres_plaats_bedrijf:    ${ json_bedrijf.adres_plaats_bedrijf }
    loc_adres_telefoon_bedrijf:  ${ json_bedrijf.adres_telefoon_bedrijf }
    loc_website_link_bedrijf:    ${ json_bedrijf.website_link_bedrijf }
    loc_email_tekst_bedrijf:     ${ json_bedrijf.email_tekst_bedrijf }
    loc_email_link_bedrijf:      ${ json_bedrijf.email_link_bedrijf }
  `;

  return tpl_bedrijf_01;
}
/* ======================================================================= */
/**
 * @name generate_pwa_android_01
 */
function generate_pwa_android_01(json_pwa_all_01, json_pwa_apple_01, full_path_rel_icons) {

  let tpl_pwa_01 = `
    <!-- Wat heb ik nodig om de website als pwa te laten functioneren onder Android? -->   
  `;

  return tpl_pwa_01;
}
/* ======================================================================= */
/**
 * @name generate_pwa_apple_01
 */
function generate_pwa_apple_01(json_pwa_all_01, json_pwa_apple_01, full_path_rel_icons) {

  let tpl_pwa_01 = `
    
    <!-- https://web.dev/apple-touch-icon/?utm_source=lighthouse&utm_medium=devtools -->
    <link rel="apple-touch-icon"     href="${ full_path_rel_icons }${ json_pwa_apple_01.glint_apple_touch_icon }" sizes="192x192">

    <link rel="mask-icon"            href="${ full_path_rel_icons }${ json_pwa_apple_01.glint_safari_pinned_tab }" color="${ json_pwa_all_01.glint_manifest_theme_color }">

    <!-- Komt in de layout gelijk na de iconen te staan, moet bovenin loc_head_defa_10.html -->
    <meta name="theme-color"         content="${ json_pwa_all_01.glint_manifest_theme_color }">
  `;

  return tpl_pwa_01;
}
/* ======================================================================= */
/**
 * @name generate_pwa_manifest_01
 */
function generate_pwa_manifest_01(json_pwa_all_01, json_pwa_manifest_01, full_path_rel_icons) {

  let tpl_pwa_01 = `

    {
      <!-- manifest.json -->
      "name":              "${ json_pwa_all_01.glint_twitter_title }",
      "short_name":        "${ json_pwa_manifest_01.glint_manifest_short_name }",
      "start_url":         "${ json_pwa_manifest_01.glint_manifest_start_url }",
      "theme_color":       "${ json_pwa_all_01.glint_manifest_theme_color }",
      "background_color":  "${ json_pwa_manifest_01.glint_manifest_bg_color }",
      "display":           "${ json_pwa_manifest_01.glint_manifest_display }",      
      "description":       "${ json_pwa_manifest_01.glint_manifest_description }",      
      "icons": [
        {
          "src": "${ full_path_rel_icons }${ json_pwa_all_01.glint_manifest_icon_192 }",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "${ full_path_rel_icons }${ json_pwa_all_01.glint_manifest_icon_512 }",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    }
  `;

  return tpl_pwa_01;
}
/* ======================================================================= */
/**
 * @name generate_pwa_ms_01
 */
function generate_pwa_ms_01(json_pwa_all_01, json_pwa_ms_01, full_path_rel_icons) {

  let tpl_pwa_01 = `
 
    <!-- pwa Microsoft -->
    <!-- Wat heb ik nodig om de website als pwa te laten functioneren onder Microsoft? -->       

  `;

  return tpl_pwa_01;
}
/* ======================================================================= */
/**
 * @name generate_pwa_og_01
 */
function generate_pwa_og_01(json_pwa_all_01, json_pwa_og_01, full_path_abs_icons) {

  let tpl_pwa_01 = `
    

    <!-- Facebook -->
    <meta property="og:title"        content="${ json_pwa_all_01.glint_twitter_title }">
    <meta property="og:type"         content="${ json_pwa_og_01.glint_og_type }">
    <meta property="og:url"          content="${ json_pwa_og_01.glint_og_url }">
    <meta property="og:image"        content="${ full_path_abs_icons }${ json_pwa_all_01.glint_twitter_image }">
    <meta property="og:description"  content="${ json_pwa_all_01.glint_twitter_description }">
    <meta property="og:image:type"   content="${ json_pwa_og_01.glint_og_image_type }">
    <meta property="og:image:width"  content="${ json_pwa_og_01.glint_og_image_width }">
    <meta property="og:image:height" content="${ json_pwa_og_01.glint_og_image_height }">
  `;

  return tpl_pwa_01;
}
/* ======================================================================= */
/**
 * @name generate_pwa_twitter_01
 */
function generate_pwa_twitter_01(json_pwa_all_01, json_pwa_twitter_01, full_path_abs_icons) {

  let tpl_pwa_01 = `
    
    <!-- Twitter -->
    <meta name="twitter:card"        content="${ json_pwa_twitter_01.glint_twitter_card }">
    <meta name="twitter:site"        content="${ json_pwa_twitter_01.glint_twitter_site }">
    <meta name="twitter:title"       content="${ json_pwa_all_01.glint_twitter_title }">
    <meta name="twitter:description" content="${ json_pwa_all_01.glint_twitter_description }">
    <meta name="twitter:image"       content="${ full_path_abs_icons }${ json_pwa_all_01.glint_twitter_image }">
    <meta name="twitter:image:alt"   content="${ json_pwa_all_01.glint_twitter_image_alt }">
  `;

  return tpl_pwa_01;
}
/* ======================================================================= */
/**
 * @name generate_schema_01
 */
function generate_schema_01(json_pwa_all_01, json_pwa_schema_01, full_path_abs_icons) {

  let tpl_pwa_01 = `

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name":           "${ json_pwa_schema_01.glint_schema_name }",
      "alternateName":  "${ json_pwa_schema_01.glint_schema_alternateName }",      
      "url":            "${ json_pwa_schema_01.glint_schema_url }",
      "logo":           "${ full_path_abs_icons }${ json_pwa_schema_01.glint_schema_logo }"
    }
    </script>
  `;

  return tpl_pwa_01;
}
/* ======================================================================= */
/**
 * @name generate_schema_02
 */
function generate_schema_02(json_pwa_all_01, json_pwa_schema_02, full_path_abs_icons) {

  let tpl_pwa_01 = `

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name":           "${ json_pwa_schema_02.glint_schema_name }",
      "alternateName":  "${ json_pwa_schema_02.glint_schema_alternateName }",      
      "url":            "${ json_pwa_schema_02.glint_schema_url }",
      "logo":           "${ full_path_abs_icons }${ json_pwa_schema_02.glint_schema_logo }",
      "contactPoint": {
        "@type": "ContactPoint",      
        "telephone":         "${ json_pwa_schema_02.glint_schema_telephone }",      
        "contactType":       "${ json_pwa_schema_02.glint_schema_contactType }",
        "areaServed":        "${ json_pwa_schema_02.glint_schema_areaServed }"
       }
    }
    </script>
  `;

  return tpl_pwa_01;
}
/* ======================================================================= */
/**
 * @name generate_404_01
 * @function
 * @global
 * @param  {} json_configuratie
 * @description Zelfde opmaak als form_succes.
 * @description 15 juli 2019, moet netjes zijn.
 */
function generate_404_01(json_configuratie) {

  let tpl_generate_404 = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Pagina niet gevonden&nbsp;:(</title>
            <style>
                html {
                  padding: 30px 10px;
                  font-size: 20px;
                  line-height: 1.4;
                  color: #737373;
                  background: #f0f0f0;
                  -webkit-text-size-adjust: 100%;
                  -ms-text-size-adjust: 100%;
                }

                html,
                input {
                  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                }

                body {
                  max-width: 700px;
                  _width: 700px;
                  padding: 30px 20px 50px;
                  border: 1px solid #b3b3b3;
                  border-radius: 4px;
                  margin: 0 auto;
                  box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;
                  background: #fcfcfc;
                }

                h1 {
                  margin: 0 10px;
                  font-size: 50px;
                  text-align: center;
                }

                h1 span {
                  color: #bbb;
                }

                h3 {
                  margin: 1.5em 0 0.5em;
                }

                p {
                  margin: 1em 0;
                }

                ul {
                  padding: 0 0 0 40px;
                  margin: 1em 0;
                }

                .container {
                  max-width: 580px;
                  _width: 580px;
                  margin: 0 auto;
                }
            </style>
        </head>
        <body>
          <div class="container">
            <h1>Niet gevonden&nbsp;<span>:(</span></h1>
             <p>Sorry, maar de pagina die u probeert te bekijken, bestaat niet.</p>
             <p>Het lijkt erop dat dit het resultaat is van:</p>
             <ul>
                <li>een onjuist adres</li>
                <li>of een verouderde verwijzing</li>
              </ul>
              <h3>Ga s.v.p. terug naar de <a href="${ json_configuratie.glint_url_abs }index.html" target="_blank">startpagina</a></h3>
            </div>
        </body>
    </html>
  `;

  return tpl_generate_404;

}
/* ======================================================================= */
/**
 * @name generate_offline_01
 * @function
 * @global
 * @param  {} json_configuratie
 * @description Zelfde opmaak als form_succes, 404
 * @description 15 juli 2019, moet netjes zijn.
 */
// TODO: geheel netjes maken?
function generate_offline_01(json_configuratie) {

  let tpl_offline = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>U bent (nu) niet verbonden met het internet&nbsp;:(</title>
            <style>
                html {
                  padding: 30px 10px;
                  font-size: 20px;
                  line-height: 1.4;
                  color: #737373;
                  background: #f0f0f0;
                  -webkit-text-size-adjust: 100%;
                  -ms-text-size-adjust: 100%;
                }

                html,
                input {
                  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                }

                body {
                  max-width: 700px;
                  _width: 700px;
                  padding: 30px 20px 50px;
                  border: 1px solid #b3b3b3;
                  border-radius: 4px;
                  margin: 0 auto;
                  box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;
                  background: #fcfcfc;
                }

                h1 {
                  margin: 0 10px;
                  font-size: 50px;
                  text-align: center;
                }

                h1 span {
                  color: #bbb;
                }

                h3 {
                  margin: 1.5em 0 0.5em;
                }

                p {
                  margin: 1em 0;
                }

                ul {
                  padding: 0 0 0 40px;
                  margin: 1em 0;
                }

                .container {
                  max-width: 580px;
                  _width: 580px;
                  margin: 0 auto;
                }
            </style>
        </head>
        <body>
          <div class="container">
            <h1>U bent (nu) niet verbonden met het internet</h1>
          </div>
        </body>
    </html>
  `;

  return tpl_offline;

}
/* ======================================================================= */
/**
 * @name get_github_json_01
 * @function
 * @global
 * @param  {} url
 * @param  {} callback
 * @description Haal een JSON-bestand op van GitHub.
 * @description zie https://paulsalaets.com/posts/json-api-with-github-pages
 */
/* TODO: 3. het ophalen kan moderner
   https://github.com/axios/axios, kan ook via CDN
 */
function get_github_json_01(url, callback) {
  var req = new XMLHttpRequest();

  req.addEventListener('load', onLoad);
  req.addEventListener('error', onFail);
  req.addEventListener('abort', onFail);

  req.open('GET', url);
  req.send();

  function onLoad(event) {
    if (req.status >= 400) {
      onFail(event);
    } else {
      var json = JSON.parse(this.responseText);
      callback(null, json);
    }
  }

  function onFail(event) {
    callback(new Error('...'));
  }
}
/* ======================================================================= */
/**
 * @name get_github_json_01
 * @function
 * @global
 * @param  {} url
 * @param  {} callback
 * @description Afhankelijk van de schakelaar glint_github_upload_yes
 * @description && wordt de abs url van het locale project of de abs url van Github gegeven.<br><br>
 * @description Deze schakelaar true maken wanneer het project ge-upload wordt naar Github.
 */
function get_github_url_01() {
  if (json_configuratie.glint_github_upload_yes) {
    return full_github_path_abs_json;
  } else {
    return full_path_abs_json;
  }
}
/* ======================================================================= */
/**
 * @description haal van een string het laatste teken eraf, bijv. "images/" wordt "images".
 * @description wordt o.a. gebruikt bij de locale generate_prose_01
 * @param  {string } volle_naam
 * @return  {string} korte_naam
 */
function delete_last_char(volle_naam) {
  let lengte = volle_naam.length;
  let korte_naam = volle_naam.substr(0, (lengte-1));
  return korte_naam;
}
/* ======================================================================= */
/*! const randow MIT License */
/**
 * @description  https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
 *
 */
const random = (lower, upper) => {
  if(!upper || typeof upper === 'boolean') {
    upper = lower;
    lower = 0;
  }

  let randomic = Math.random() * upper;
  return randomic >= lower ? randomic : random(lower, upper);
}
/* ======================================================================= */
/**
 * @description Nummer moet in een link: https://nuxtjs.org/faq/ios-phone-numbers
 * @description Anders problemen met iOS, some mobile Safari versions
 */
/* TODO: Testen het telefoonnummer op mobiel of het werkt. */
function telefoon_nr_mut(telefoon_nr) {

  let tpl_mut_nummer = `
    <div class="screen-mobile">
      <a href="<%= telefoon_nr %>" target="_top"><%= telefoon_nr %></a>
    </div>
    <div class="screen-not-mobile">
      <%= telefoon_nr %>
    </div>
  `;

  let renderTemplate = template.compile(tpl_mut_nummer);
  return renderTemplate({ telefoon_nr });
}
/* ======================================================================= */
/**
 * @description Testen op IE: https://getbutterfly.com/how-to-show-an-outdated-browser-alert-on-internet-explorer-11/
 * @description Zie eventueel ook: https://codepen.io/gapcode/pen/vEJNZN
 * Detect IE 10 and IE 11
 */
/* TODO: TODO Testen onder IE en Edge. */
function isXXXIE1011() {
    // IE 10 and IE 11
    return /Trident\/|MSIE/.test(window.navigator.userAgent);
}
/* ======================================================================= */
/**
 * @description Let op: hier geen Template Literals gebruiken, IE kent ze niet.
 */
/* TODO: TODO Testen onder IE en Edge. */
var showXXXBrowserAlert = (function () {
    if (document.querySelector('.block_oudeIE_62')) {
        let d = document.getElementsByClassName('block_oudeIE_62');

        is_IE1011 = isIE1011();

        if (is_IE1011) {
            d[0].innerHTML = '<p>Deze site komt niet meer tot zijn recht met Internet Explorer.<br>Bezoek a.u.b. <a href="http://browsehappy.com/">kies een andere browser</a> voor een betere beleving.</p>';
            d[0].style.display = 'block';
        }
    }
});
/* ========================================================================== */
/* ========================================================================== */
