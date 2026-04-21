var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-IB_26",
  "level": "1",
  "url": "sec-IB_26.html",
  "type": "Worksheet",
  "number": "1.1",
  "title": "2026 Integration Bee",
  "body": " 2026 Integration Bee  April 17th, 2026   Qualifying Round                                            Quarter Finals                ,       Semi-Finals                              Third Place Tie Breaker            Final Round           "
},
{
  "id": "sec-IB_26-3-2",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-3-2",
  "type": "Worksheet Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_26-3-3",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-3-3",
  "type": "Worksheet Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_26-3-4",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-3-4",
  "type": "Worksheet Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_26-3-5",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-3-5",
  "type": "Worksheet Exercise",
  "number": "1.1.4",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_26-3-6",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-3-6",
  "type": "Worksheet Exercise",
  "number": "1.1.5",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_26-4-2",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-4-2",
  "type": "Worksheet Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_26-4-3",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-4-3",
  "type": "Worksheet Exercise",
  "number": "1.1.7",
  "title": "",
  "body": "      ,    "
},
{
  "id": "sec-IB_26-5-2",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-5-2",
  "type": "Worksheet Exercise",
  "number": "1.1.8",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_26-5-3",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-5-3",
  "type": "Worksheet Exercise",
  "number": "1.1.9",
  "title": "",
  "body": "         "
},
{
  "id": "sec-IB_26-5-4",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-5-4",
  "type": "Worksheet Exercise",
  "number": "1.1.10",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_26-6-2",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-6-2",
  "type": "Worksheet Exercise",
  "number": "1.1.11",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_26-7-2",
  "level": "2",
  "url": "sec-IB_26.html#sec-IB_26-7-2",
  "type": "Worksheet Exercise",
  "number": "1.1.12",
  "title": "",
  "body": "       "
},
{
  "id": "sec-IB_25",
  "level": "1",
  "url": "sec-IB_25.html",
  "type": "Worksheet",
  "number": "1.2",
  "title": "2025 Integration Bee",
  "body": " 2025 Integration Bee   Sample Questions           "
},
{
  "id": "sec-IB_25-2-2",
  "level": "2",
  "url": "sec-IB_25.html#sec-IB_25-2-2",
  "type": "Worksheet Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "       "
},
{
  "id": "sec-OpenMath",
  "level": "1",
  "url": "sec-OpenMath.html",
  "type": "Worksheet",
  "number": "2.1",
  "title": "2025 Open Mathematics Contest",
  "body": " 2025 Open Mathematics Contest   Sample Questions           "
},
{
  "id": "sec-OpenMath-2-2",
  "level": "2",
  "url": "sec-OpenMath.html#sec-OpenMath-2-2",
  "type": "Worksheet Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "       "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
