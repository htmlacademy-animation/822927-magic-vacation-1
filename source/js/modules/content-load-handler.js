export default () => {
  const body = document.querySelector(`body`);
  body.classList.add(`loaded`);

  const socialBlockToggler = document.querySelector(`.social-block__toggler`);
  socialBlockToggler.classList.add(`social-block__toggler--onload`);
  setTimeout(() => socialBlockToggler.classList.remove(`social-block__toggler--onload`), 650);
};
