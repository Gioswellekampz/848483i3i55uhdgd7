document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
  
    // Verifica se i cookie sono già stati accettati
    if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'flex';
    } else {
        cookieBanner.style.display = 'none'; // Nasconde il banner se i cookie sono già accettati
    }
    
  
    // Gestione del click sul pulsante di accettazione
    acceptCookiesButton.addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
  });