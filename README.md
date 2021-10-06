<div align="center">
<img src="./assets/logo_solvro.png" height="200">
</div>

# Rekrutacja

W ramach rekrutacji stworzyliśmy trzy zadania z trzech różnych kategorii. Wybierz **jedno** zadanie, a [link do rozwiązania prześlij przez formularz zgłoszeniowy](https://forms.gle/ZgieC3G2VDBEQQEv6). Rozwiązanie zadania z kategorii **Mobile** udostępnij w publicznym repozytorium kodu (np. Github). W przypadku rozwiązań z kategorii **Design** i **Grafika** pozostawiamy pełną dowolność - możesz umieścić je zarówno w chmurze, hostingu jak i w dowolnym serwisie na którym robisz projekt. Zadania powinny być rozwiązywane indywidualnie.
W razie jakichkolwiek pytań nie bójcie się ich zadawać za pośrednictwem fanpage'a na facebooku :)

**Niezależnie od decyzji przyjęcia, każdemu kandydatowi zostanie zwrócony feedback odnośnie jego rozwiązania zadania.**

**Powodzenia!**

## Kategorie:

- [Mobile](#Mobile)
- [Design](#Design)
- [Grafika](#Grafika)
- [Backend](#Backend)

<a name="Mobile"></a>

## Mobile

Zaprojektuj i napisz aplikację, umożliwiającą wyświetlanie informacji na temat serialu **Rick and Morty!** Pamiętaj, że podczas oceniania będą brane pod uwagę zarówno **jakość kodu,** jak i **“feeling”** aplikacji. Dodatkowa inwencja twórcza jest jak najbardziej mile widziana, dlatego nie bój się **zagłębić w dokumentację i zaproponować autorskie rozwiązania! :)**

Aplikacje możesz stworzyć natywnie na **Androida, IOSa,** bądź wykorzystać multiplatformowe rozwiązanie np. **React Native,** z użyciem takich technologii, jakich tylko zapragniesz :).

Do uzyskania danych skorzystaj z [otwartego API serialu](https://rickandmortyapi.com/documentation/):

- pobierz oraz wyświetl listę postaci (https://rickandmortyapi.com/api/character/),
- po kliknięciu pozycji na liście aplikacja powinna wyświetlić szczegóły wybranej postaci,
- dodaj możliwość filtrowania postaci po statusie (alive, dead or unknown),
- dodaj możliwość przeszukiwania listy po nazwie odcinka,
- w przypadku braku połączenia z internetem aplikacja powinna wyświetlać listę (może być tylko częściowa) ostatnio załadowanych postaci,
- użytkownik powinien mieć możliwość dodania postaci do ulubionych,
- użytkownik powinien mieć możliwość wyświetlenia listy ulubionych bohaterów.

Jeśli wciąż Ci mało (a mamy taką nadzieję! :)) możesz rozbudować swoją aplikację o dodanie **nowych funkcjonalności,** np. wyświetlenie listy odcinków bohatera. Wzbogać widoki np. przez dodanie **dark mode’a** i animacji.

Dokumentacja API jest do Twojej dyspozycji, także **nie wahaj się eksperymentować z rozwiązaniami! :)**

<a name="Design"></a>

## Design

Zaprojektuj makietę aplikacji internetowej lub mobilnej, pozwalającej na **zapisywanie się w pokojach na rajdy PWr**!

Twoim zadaniem jest przygotowanie ekranu odpowiedzialnego za **przeglądanie listy dostępnych pokoi** i widoku **rezerwacji wybranego lokum**.

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

<a name="Grafika"></a>

## Grafika

W ramach rekrutacji przygotowaliśmy zadanie składające się z **4 podpunktów**. Wykonaj każdy z nich i postaraj się, żeby wszystkie grafiki były ze sobą spójne.

### Grafika nr 1

Solvro kończy już 3 lata! Z tej okazji opublikujemy jubileuszowy post, w którym podsumujemy 3 lata pracy i opowiemy o planach na przyszłość.  
**Zaprojektuj grafikę do wspomnianego posta na fanpage.**

### Grafika nr 2

Solvro od pewnego czasu organizuje webinaria pod nazwą „Solvro Talks”.
W planach jest poprowadzenie kolejnego - tym razem na temat wprowadzenia do sztucznej inteligencji.  
**Zaprojektuj grafikę promującą to wydarzenie na Facebooku.**

### Grafika nr 3

Solvro znowu rekrutuje! Z tej okazji tworzymy specjalne wydarzenie dla studentów, podczas którego będą mogli z nami porozmawiać na Discordzie i zadać pytania dotyczące pracy w kole.  
**Zaprojektuj tło do wydarzenia na Facebooku naszego eventu.**

### Grafika nr 4

Ambitni członkowie koła przygotowali ciekawostkę na Instagrama i potrzebują graficznej obróbki.  
**Pomóż ambitnym członkom koła!**

Tekst ciekawostki - "Technologia Kotlin Multiplatform pozwala na pisanie wspólnego kodu dla Androida i iOS".

<a name="Backend"></a>

## Backend

Napisz API do zarządzania rezerwacjami stolików w restauracji.

W [pliku](./backend/seats.json) JSON znajduje się lista stolików w restauracji. Każdy stolik ma przypisany swój numer oraz minimalną i maksymalną liczbę miejsc.

### Endpointy do zaimplementowania:

Wszystkie endpointy powinny być zaimplementowane zgodnie z [specyfikacją](./backend/api-spec.yaml). Pamiętaj, że specyfikacja API niekoniecznie musi obejmować wszystkie możliwe kody odpowiedzi HTTP.

#### Składanie rezerwacji.

- Zapytanie POST: `/reservation`.
- Endpoint pozwala klientowi na złożenie nowej rezerwacji na stolik.
- Istotne jest, aby przed zapisaniem rezerwacji sprawdzić poprawność wszystkich danych, oraz dostępność stolika w wybranym czasie.
- Po udanej rezerwacji należy wysłać wiadomość na podany przez użytkownika adres e-mail. W wiadomości powinny znaleźć się wszystkie dane oraz unikalny numer rezerwacji. Do wysyłania "fake maili" skorzystaj z [Ethereal](https://ethereal.email/).
- Należy zwrócić właściwą odpowiedź HTTP i zapisać rezerwację bazie danych.

#### Pobranie listy rezerwacji danego dnia

- Zapytanie GET: `/reservation`
- Endpoint pozwala pracownikom restauracji na pobranie listy wszystkich rezerwacji danego dnia.

#### Wysłanie prośby o anulowanie rezerwacji

- Zapytanie PUT: `/reservation/{id}`
- Endpoint pozwala klientowi na wysłanie prośby o anulowanie rezerwacji.
- Użytkownik w parametrze zapytania wysyła unikalne id rezerwacji, które otrzymał na maila.
- W treści zapytania wysyłana jest prośba o zmianę statusu rezerwacji na wartość "requested cancellation".
- Rezerwacja może zostać anulowana najpóźniej 2 godziny przed godziną na którą został zarezerwowany stolik.
- Jeśli anulwanie jest możliwe należy wysłać wiadomość e-mail na adres użytkownika. W treści maila należy umieścić 6-cyfrowy kod weryfikacyjny, który służy do potwierdzenia tożsamości.

#### Potwierdzenie anulowania rezerwacji

- Zapytanie DELETE: `/reservation/{id}`
- Endpoint służy do potwierdzenia anulowania rezerwacji.
- W treści zapytania użytkownik wysyła kod weryfikacyjny, który otrzymał w widomości e-mail.
- Jeżeli kod jest poprawny i możliwe jest anulowanie rezerwacji, to należy usunąć ją z bazy danych i potwierdzić anulowanie e-mailem.

#### Pobranie listy wolnych stolików

- Zapytanie GET: `/table`
- Endpoint pozwala klientowi na pobranie listy wszystkich dostępnych do rezerwacji stolików w określonym czasie i z odpowiednią liczbą miejsc.
