// These are to give some granularity for forecast pulls without needing to pull
// from another API for forward geocoding since we need lat and long coords
export type State = {
  Abbr: string,
  Latitude: number,
  Longitude: number,
  Name: string,
}

export const States: State[] = [{
  Abbr: 'AK',
  Latitude: 63.588753,
  Longitude: -154.493062,
  Name: 'Alaska'
},
{
  Abbr: 'AL',
  Latitude: 32.318231,
  Longitude: -86.902298,
  Name: 'Alabama'
},
{
  Abbr: 'AR',
  Latitude: 35.20105,
  Longitude: -91.831833,
  Name: 'Arkansas'
},
{
  Abbr: 'AZ',
  Latitude: 34.048928,
  Longitude: -111.093731,
  Name: 'Arizona'
},
{
  Abbr: 'CA',
  Latitude: 36.778261,
  Longitude: -119.417932,
  Name: 'California'
},
{
  Abbr: 'CO',
  Latitude: 39.550051,
  Longitude: -105.782067,
  Name: 'Colorado'
},
{
  Abbr: 'CT',
  Latitude: 41.603221,
  Longitude: -73.087749,
  Name: 'Connecticut'
},
{
  Abbr: 'DC',
  Latitude: 38.905985,
  Longitude: -77.033418,
  Name: 'District of Columbia'
},
{
  Abbr: 'DE',
  Latitude: 38.910832,
  Longitude: -75.52767,
  Name: 'Delaware'
},
{
  Abbr: 'FL',
  Latitude: 27.664827,
  Longitude: -81.515754,
  Name: 'Florida'
},
{
  Abbr: 'GA',
  Latitude: 32.157435,
  Longitude: -82.907123,
  Name: 'Georgia'
},
{
  Abbr: 'HI',
  Latitude: 19.898682,
  Longitude: -155.665857,
  Name: 'Hawaii'
},
{
  Abbr: 'IA',
  Latitude: 41.878003,
  Longitude: -93.097702,
  Name: 'Iowa'
},
{
  Abbr: 'ID',
  Latitude: 44.068202,
  Longitude: -114.742041,
  Name: 'Idaho'
},
{
  Abbr: 'IL',
  Latitude: 40.633125,
  Longitude: -89.398528,
  Name: 'Illinois'
},
{
  Abbr: 'IN',
  Latitude: 40.551217,
  Longitude: -85.602364,
  Name: 'Indiana'
},
{
  Abbr: 'KS',
  Latitude: 39.011902,
  Longitude: -98.484246,
  Name: 'Kansas'
},
{
  Abbr: 'KY',
  Latitude: 37.839333,
  Longitude: -84.270018,
  Name: 'Kentucky'
},
{
  Abbr: 'LA',
  Latitude: 31.244823,
  Longitude: -92.145024,
  Name: 'Louisiana'
},
{
  Abbr: 'MA',
  Latitude: 42.407211,
  Longitude: -71.382437,
  Name: 'Massachusetts'
},
{
  Abbr: 'MD',
  Latitude: 39.045755,
  Longitude: -76.641271,
  Name: 'Maryland'
},
{
  Abbr: 'ME',
  Latitude: 45.253783,
  Longitude: -69.445469,
  Name: 'Maine'
},
{
  Abbr: 'MI',
  Latitude: 44.314844,
  Longitude: -85.602364,
  Name: 'Michigan'
},
{
  Abbr: 'MN',
  Latitude: 46.729553,
  Longitude: -94.6859,
  Name: 'Minnesota'
},
{
  Abbr: 'MO',
  Latitude: 37.964253,
  Longitude: -91.831833,
  Name: 'Missouri'
},
{
  Abbr: 'MS',
  Latitude: 32.354668,
  Longitude: -89.398528,
  Name: 'Mississippi'
},
{
  Abbr: 'MT',
  Latitude: 46.879682,
  Longitude: -110.362566,
  Name: 'Montana'
},
{
  Abbr: 'NC',
  Latitude: 35.759573,
  Longitude: -79.0193,
  Name: 'North Carolina'
},
{
  Abbr: 'ND',
  Latitude: 47.551493,
  Longitude: -101.002012,
  Name: 'North Dakota'
},
{
  Abbr: 'NE',
  Latitude: 41.492537,
  Longitude: -99.901813,
  Name: 'Nebraska'
},
{
  Abbr: 'NH',
  Latitude: 43.193852,
  Longitude: -71.572395,
  Name: 'New Hampshire'
},
{
  Abbr: 'NJ',
  Latitude: 40.058324,
  Longitude: -74.405661,
  Name: 'New Jersey'
},
{
  Abbr: 'NM',
  Latitude: 34.97273,
  Longitude: -105.032363,
  Name: 'New Mexico'
},
{
  Abbr: 'NV',
  Latitude: 38.80261,
  Longitude: -116.419389,
  Name: 'Nevada'
},
{
  Abbr: 'NY',
  Latitude: 43.299428,
  Longitude: -74.217933,
  Name: 'New York'
},
{
  Abbr: 'OH',
  Latitude: 40.417287,
  Longitude: -82.907123,
  Name: 'Ohio'
},
{
  Abbr: 'OK',
  Latitude: 35.007752,
  Longitude: -97.092877,
  Name: 'Oklahoma'
},
{
  Abbr: 'OR',
  Latitude: 43.804133,
  Longitude: -120.554201,
  Name: 'Oregon'
},
{
  Abbr: 'PA',
  Latitude: 41.203322,
  Longitude: -77.194525,
  Name: 'Pennsylvania'
},
{
  Abbr: 'PR',
  Latitude: 18.220833,
  Longitude: -66.590149,
  Name: 'Puerto Rico'
},
{
  Abbr: 'RI',
  Latitude: 41.580095,
  Longitude: -71.477429,
  Name: 'Rhode Island'
},
{
  Abbr: 'SC',
  Latitude: 33.836081,
  Longitude: -81.163725,
  Name: 'South Carolina'
},
{
  Abbr: 'SD',
  Latitude: 43.969515,
  Longitude: -99.901813,
  Name: 'South Dakota'
},
{
  Abbr: 'TN',
  Latitude: 35.517491,
  Longitude: -86.580447,
  Name: 'Tennessee'
},
{
  Abbr: 'TX',
  Latitude: 31.968599,
  Longitude: -99.901813,
  Name: 'Texas'
},
{
  Abbr: 'UT',
  Latitude: 39.32098,
  Longitude: -111.093731,
  Name: 'Utah'
},
{
  Abbr: 'VA',
  Latitude: 37.431573,
  Longitude: -78.656894,
  Name: 'Virginia'
},
{
  Abbr: 'VT',
  Latitude: 44.558803,
  Longitude: -72.577841,
  Name: 'Vermont'
},
{
  Abbr: 'WA',
  Latitude: 47.751074,
  Longitude: -120.740139,
  Name: 'Washington'
},
{
  Abbr: 'WI',
  Latitude: 43.78444,
  Longitude: -88.787868,
  Name: 'Wisconsin'
},
{
  Abbr: 'WV',
  Latitude: 38.597626,
  Longitude: -80.454903,
  Name: 'West Virginia'
},
{
  Abbr: 'WY',
  Latitude: 43.075968,
  Longitude: -107.290284,
  Name: 'Wyoming'
}]
