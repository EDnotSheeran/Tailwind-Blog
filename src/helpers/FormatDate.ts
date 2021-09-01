export function shortDate(dateString: string, lang: string = 'en') {
  let d = new Date(dateString);
  let ye = new Intl.DateTimeFormat(lang, { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat(lang, { month: 'long' }).format(d);
  let da = new Intl.DateTimeFormat(lang, { day: '2-digit' }).format(d);

  return `${mo} ${da}, ${ye}`;
}

export function longDate(dateString: string, lang: string = 'en') {
  let d = new Date(dateString);
  let ye = new Intl.DateTimeFormat(lang, { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat(lang, { month: 'long' }).format(d);
  let da = new Intl.DateTimeFormat(lang, { day: '2-digit' }).format(d);
  let wd = new Intl.DateTimeFormat(lang, { weekday: 'long' }).format(d);

  return `${wd}, ${mo} ${da}, ${ye}`;
}
