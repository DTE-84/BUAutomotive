// All of the shop's business details live here so they can be updated in one place.
// Items marked TODO are placeholders — swap in the real info before launch.

export const site = {
  name: 'Uppinghouse Performance & Auto Repair',
  owner: 'Bobby Uppinghouse',
  motto: 'Little Town Feel, Big Time Service',
  address: {
    street: '200 E. Main St.',
    city: 'Plainville',
    state: 'IL',
    zip: '62365',
  },
  phone: '(217) 555-0123', // TODO: real shop phone
  email: 'service@uppinghouseauto.com', // TODO: real shop email
  facebook: '', // TODO: Facebook page URL (leave empty to hide the link)
  yearsExperience: '20+', // TODO: confirm with Bobby
  hoursSummary: 'Evenings & Weekends',
  hours: [
    { days: 'Monday – Friday', time: 'Evenings, Call to Schedule' },
    { days: 'Saturday & Sunday', time: 'Open, Call Ahead' },
  ],
};

export const fullAddress = `${site.address.street} ${site.address.city}, ${site.address.state} ${site.address.zip}`;
export const phoneHref = `tel:${site.phone.replace(/[^\d]/g, '')}`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=15&output=embed`;
