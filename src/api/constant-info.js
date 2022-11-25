export const queryAPIBaseURL = 'https://en.wikipedia.org/w/api.php?'
export const v1APIBaseURL = {
  trendingToday: `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/`,
  featuredToday: `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/`,
}
export const linkItemBaseURL = 'https://en.wikipedia.org/?curid='
export const trendingItemBaseURL = 'https://en.wikipedia.org/wiki/'

export const imgSourceFallBack =
  'https://nightgalaxy.sellware.net/img/Noimage.jpg?nocache=1666914428437'

export const wikiMediaFoundationURL =
  'https://en.wikipedia.org/wiki/Wikimedia_Foundation'

export const volunteerProjectsURL =
  'https://wikimediafoundation.org/our-work/wikimedia-projects/'

export const projectListInfo = [
  {
    title: 'Commons',
    description: '  Free media repository',
    url: 'https://commons.wikimedia.org/wiki/',
    image: {
      alt: 'Commons logo',
      width: '31',
      height: '42',
      source:
        '//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/31px-Commons-logo.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/47px-Commons-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/62px-Commons-logo.svg.png 2x',
    },
  },
  {
    title: 'MediaWiki',
    description: 'Wiki software development',
    url: 'https://www.mediawiki.org/wiki/',
    image: {
      alt: 'MediaWiki logo',
      width: '35',
      height: '35',
      source:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/MediaWiki-2020-icon.svg/35px-MediaWiki-2020-icon.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/MediaWiki-2020-icon.svg/53px-MediaWiki-2020-icon.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a6/MediaWiki-2020-icon.svg/70px-MediaWiki-2020-icon.svg.png 2x',
    },
  },
  {
    title: 'Wikibooks',
    description: 'Wiki software development',
    url: 'https://en.wikibooks.org/wiki/',
    image: {
      alt: 'Wikibooks logo',
      width: '35',
      height: '35',
      source:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/35px-Wikibooks-logo.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/53px-Wikibooks-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/70px-Wikibooks-logo.svg.png 2x',
    },
  },
  {
    title: 'Wikidata',
    description: 'Free knowledge base',
    url: 'https://www.wikidata.org/wiki/',
    image: {
      alt: 'Wikidata logo',
      width: '40',
      height: '26',
      source:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wikidata-logo.svg/47px-Wikidata-logo.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wikidata-logo.svg/71px-Wikidata-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wikidata-logo.svg/94px-Wikidata-logo.svg.png 2x',
    },
  },
  {
    title: 'Wikinews',
    description: 'Free-content news',
    url: 'https://en.wikinews.org/wiki/',
    image: {
      alt: 'Wikinews logo',
      width: '35',
      height: '41',
      source:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/24/Wikinews-logo.svg/51px-Wikinews-logo.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/24/Wikinews-logo.svg/77px-Wikinews-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/2/24/Wikinews-logo.svg/102px-Wikinews-logo.svg.png 2x',
    },
  },
  {
    title: 'Wikiquote',
    description: 'Collection of quotations',
    url: 'https://en.wikiquote.org/wiki/',
    image: {
      alt: 'Wikiquote logo',
      width: '35',
      height: '41',
      source:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/35px-Wikiquote-logo.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/53px-Wikiquote-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/70px-Wikiquote-logo.svg.png 2x',
    },
  },
  {
    title: 'Wikisource',
    description: 'Free-content library',
    url: 'https://en.wikisource.org/wiki/',
    image: {
      alt: '"Wikisource logo',
      width: '35',
      height: '37',
      source:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/35px-Wikisource-logo.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/53px-Wikisource-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/70px-Wikisource-logo.svg.png 2x',
    },
  },
  {
    title: 'Wikispecies',
    description: 'Free-content library',
    url: 'https://species.wikimedia.org/wiki/',
    image: {
      alt: 'Wikispecies logo',
      width: '35',
      height: '41',
      source:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wikispecies-logo.svg/35px-Wikispecies-logo.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wikispecies-logo.svg/53px-Wikispecies-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wikispecies-logo.svg/70px-Wikispecies-logo.svg.png 2x',
    },
  },
  {
    title: 'Wikiversity',
    description: 'Free learning tools',
    url: 'https://en.wikiversity.org/wiki/',
    image: {
      alt: 'Wikiversity logo',
      width: '41',
      height: '34',
      source:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wikiversity_logo_2017.svg/41px-Wikiversity_logo_2017.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wikiversity_logo_2017.svg/62px-Wikiversity_logo_2017.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wikiversity_logo_2017.svg/82px-Wikiversity_logo_2017.svg.png 2x',
    },
  },
  {
    title: 'Wikivoyage',
    description: 'Free travel guide',
    url: 'https://en.wikivoyage.org/wiki/',
    image: {
      alt: 'Wikivoyage logo',
      width: '35',
      height: '35',
      source:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wikivoyage-Logo-v3-icon.svg/35px-Wikivoyage-Logo-v3-icon.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wikivoyage-Logo-v3-icon.svg/53px-Wikivoyage-Logo-v3-icon.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wikivoyage-Logo-v3-icon.svg/70px-Wikivoyage-Logo-v3-icon.svg.png 2x',
    },
  },
  {
    title: 'Wiktionary',
    description: ' Dictionary and thesaurus',
    url: 'https://en.wiktionary.org/wiki/',
    image: {
      alt: 'Wiktionary logo',
      width: '35',
      height: '35',
      source:
        '//upload.wikimedia.org/wikipedia/en/thumb/0/06/Wiktionary-logo-v2.svg/35px-Wiktionary-logo-v2.svg.png',
      sourceSet:
        '//upload.wikimedia.org/wikipedia/en/thumb/0/06/Wiktionary-logo-v2.svg/53px-Wiktionary-logo-v2.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/0/06/Wiktionary-logo-v2.svg/70px-Wiktionary-logo-v2.svg.png 2x',
    },
  },
]

export const donateURL =
  'https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en'

export const licenseNotes = `Text is available under the Creative Commons Attribution-ShareAlikeLicense 3.0; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit
organization.`

export const instaKkkraterrr = "https://instagram.com/kkkarterrr"
export const githubIsmalex = "https://github.com/ismalex"
