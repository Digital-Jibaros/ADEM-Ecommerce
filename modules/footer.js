export default function footer() {
  const footer = document.createElement('footer');
  const copyright = document.createElement('p');
  const socialMediaDiv = document.createElement('div');
  const iconInstagram = document.createElement('img');
  const iconFacebook = document.createElement('img');
  const iconTwitter = document.createElement('img');

  copyright.textContent = '© 2023 Leafy Living';
  iconInstagram.setAttribute('src', './media/images/icons/instagram.svg');
  iconFacebook.setAttribute('src', './media/images/icons/facebook.svg');
  iconTwitter.setAttribute('src', './media/images/icons/twitter.svg');

  socialMediaDiv.append(iconInstagram, iconFacebook, iconTwitter);
  footer.append(copyright, socialMediaDiv);

  return footer;
}
