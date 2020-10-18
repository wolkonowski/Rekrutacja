<div align="center">
<img src="./assets/logo_solvro.png" height="200">
</div>

# Rekrutacja

W ramach rekrutacji stworzyliśmy pięć zadań z pięciu różnych kategorii, żeby każdy znalazł coś dla siebie. Wybierz **jedno** zadanie, a rozwiązanie udostępnij w publicznym repozytorium kodu (np. GitHub). Zadania powinny być rozwiązywane indywidualnie. Link do repozytorium należy wysłać nam mailem lub przez wiadomość prywantną na Facebooku. W razie jakichkolwiek pytań nie bójcie się ich zadawać za pośrednictwem fanpage'u facebooku :)  
  
**Niezależnie od decyzji przyjęcia, każdemu kandydatowi zostanie zwrócony feedback odnośnie jego rozwiązania zadania.**  

**Powodzenia!**

## Kategorie:

  - [Frontend](#Frontend)
  - [Design](#Design)
  - [Mobile](#Mobile)
  - [Backend](#Backend)
  - [Machine Learning](#ML)

<a name="Frontend"></a>

## Frontend

_W [katalogu `./frontend` w tym repozytorium](https://github.com/Solvro/rekrutacja/tree/master/frontend) znajduje się proste API wraz z opisem endpointów dla poniższego zadania._

Korzystając z frameworka `React.js`, `Vue.js` lub `Angular` napisz formularz umożliwiający rezerwację lub zakup biletu do kina.

Formularz ma udostępniać opcję **wyboru godziny** (lista godzin zwracana jest przez API), **wyboru miejsca lub kilku miejsc na planie kina** (dostępność miejsc dostępna przez API) oraz **wyboru zniżki** (te można sobie wymyślić :wink:). Po wypełnieniu powyższych informacji wraz z **danymi kontaktowymi** (imię, nazwisko, email, numer telefonu), użytkownik przenoszony jest do **widoku podsumowania**, który pozwala przejrzeć i edytować wszystkie pola.

Dozwolone jest użycie frameworków CSS jak i bibliotek dostępnych w repozytorium NPM. Ocenie podlega wygląd, jakość kodu (między innymi właściwe dla danego frameworka wykorzystanie formularzy) oraz ogólny feeling aplikacji (responsywność, walidacja pól).  
**Czas na wykonanie tego zadania to 2 tygodnie.**
<a name="Design"></a>

## Design

Zaprojektuj makietę aplikacji internetowej, pozwalającej na **zapisywanie się w pokojach na rajdy PWr**!

Twoim zadaniem jest przygotowanie ekranu odpowiedzialnego za **przeglądanie listy dostępnych pokoi** i widoku **rezerwacji wybranego lokum**. Oba ekrany powinny być przedstawione w wersji zarówno **mobilnej, jak i na przeglądarki**.

Zadbaj, aby makieta uwzględniała podane funkcjonalności:
- Zapisany na rajd student ma możliwość rezerwacji tylko jednego miejsca w hotelu
- Użytkownik ma prawo zmienić wybrane wcześniej lokum
- Każdy pokój na liście posiada swój numer
- Pokoje mieszczą różną liczbę osób
- Wszystkie, bez względu na dostępność, wyświetlają się na liście
- Aktualne zapełnienie jest publicznie dostępne

Aplikacja powinna korzystać z [danego koloru wiodącego, wraz z jego odcieniami](./assets/palette.png).  
Cała skala szarości jest również do Twojej dyspozycji.

Przykładowe narzędzia:
- aplikacje do tworzenia makiet (np. `Figma`, `AdobeXD`)
- do grafiki wektorowej (np. `Inkscape`, `Adobe Illustrator`)
- do grafiki rastrowej (np. `Gimp`, `Photoshop`)

Oceniany będzie wygląd aplikacji i przyjazność interfejsu użytkownika.  
**Czas na wykonanie tego zadania to 2 tygodnie.**
<a name="Mobile"></a>

## Mobile

Zaprojektuj i napisz aplikację mobilną zawierającą **listę dostępnych produktów spożywczych** w Twojej lodówce!

Użytkownik aplikacji powinien mieć możliwość dodawania do listy nowych produktów. Każda pozycja powinna zawierać informacje takie jak: **nazwa produktu**, **liczba sztuk / ilość** i, co najważniejsze, **termin przydatności do spożycia**. Może warto się pokusić o dodanie jakiegoś zdjęcia każdego produktu?

Zadbaj o pełną funkcjonalność aplikacji:

- użytkownik powinien mieć możliwość usunięcia produktu z listy oraz aktualizacji liczby/ilości danego produktu,
- produkty powinny być sortowane po terminie przydatności do spożycia,
- lista produktów powinna być pamiętana po zamknięciu aplikacji.

Do przechowywania listy produktów możesz użyć [Firebase'a](https://firebase.google.com/), **SQLite'a** lub innego stosownego rozwiązania.

Aplikację możesz napisać natywnie na systemy **iOS** lub **Android** albo pokusić się o skorzystanie z JSowego frameworka, na przykład **React Native**.

Oceniane będą **jakość kodu** oraz 'feeling' aplikacji (łatwość oraz wygoda użytkowania). Wszelkie własne 'ficzery' mile widziane!  
**Czas na wykonanie tego zadania to 2 tygodnie.**
<a name="Backend"></a>

## Backend

Wyobraź sobie, że piszesz backend do **aplikacji imitującej JakDojade**!

W [pliku](./backend/solvro_city.json) JSON dostaniesz zapisaną mapę przystanków w Solvro City. Napisz część serwisu odpowiadającą za rejestrację i logowanie się użytkownika oraz za podawanie informacji o przystankach i najkrótszej trasy pomiędzy dwoma z nich. O sposobie podawania tych informacji powie Ci [specyfikacja](./backend/stops_api.yaml) (część z wyznaczaniem trasy wykonaj bez używania zewnętrznych bibliotek)

Do Twojej dyspozycji dajemy [skrypt](./backend/city_generator.py), który generuje mapę miasta i zapisuję ją do pliku. Możesz go użyć do testowania swojego API dla różnych map.

Na koniec zadbaj o **przejrzyste readme**.

Nice to have:
 - łatwość odpalania Twojego kodu niezależnie od środowiska (serdecznie polecamy Dockera)
 - swagger wygenerowany z kodu na wybranym porcie :-)

Oceniana będzie jakość kodu, jego dokumentacja, rozwiązanie postawionego problemu, użycie odpowiednich technologii, odporność na podstawowe ataki oraz błędne dane (które nie są zawarte w specyfikacji) i praca z systemem kontroli wersji.  
**Czas na wykonanie tego zadania to 2 tygodnie.**
<a name="ML"></a>

## Machine Learning

Wyobraź sobie, że tworzymy aplikację mającą na celu doklejanie zabawnych filtrów do twarzy. Zanim jednak przystąpimy do jej implementacji, potrzebujemy Twojej pomocy, aby **wykryć środek twarzy na zdjęciu**, bez tego cały plan na aplikację legnie w gruzach już na samym starcie! :(  

Używając odpowiednich narzędzi, skonstruuj **model do przewidywania współrzędnych (x,y) na zdjęciu, które oznaczą środek twarzy osoby na nim się znajdującej**! Twoim zadaniem na początek jest zebranie datasetu, następnie wytrenowanie modelu i ewaluacja tego, jak sobie radzi!Oceniane będzie dobranie odpowiednich narzędzi do zadania, wybranie odpowiedniego modelu do postawionego zadania (nie musisz zamykać się na Deep Learning, jeśli uważasz, że model typowo MLowy wystarczy droga wolna), a także graficzne przedstawienie całego procesu od pozyskania danych ich ewentualnej obróbki po ewaluację.  

**UWAGA** to jak model sobie radzi nie będzie oceniane (tzn. nie ma różnicy, czy to będzie skuteczność na poziomie 90%, czy 95%, natomiast na pewno warto by była ona przyzwoita).  

**Czas na wykonanie tego zadania to 3 tygodnie.**
