# Machine learning 

**Termin wykonania zadania:** <del>25.10 23:59</del> **31.10 23:59** - termin został przedłużony!

Wyobraź sobie, że chcesz zaprojektować system dla autonomicznego auta. Jest to 
skomplikowane zadanie, u którego podstaw stoi inteligentna obserwacja otoczenia. Twoim 
zadaniem jest wyuczenie modelu opartego na sieciach konwolucyjnych, którego zadaniem 
będzie detekcja znaków drogowych na podstawie zdjęć.

Załóż, że na każdym zdjęciu znajduje się jeden znak, który ma zostać zlokalizowany przez
model poprzez obrysowanie go bounding boxem. Możesz tego dokonać np. przez regresję 
koordynatów bounding boxa tzn. wartości `[xmin, xmax, ymin, ymax]`. Nie chcemy żebyś używał 
zbyt złożonej architektury (np. YOLO) do detekcji wielu obiektów na zdjęciu.

Poniżej podajemy link do przykładowego zbioru danych. 

Zdjęcia z tego datasetu mogą zawierać więcej niż jeden znak jako etykietę. 
Aby dostosować zbiór do wymagań zadania (tzn. Aby dla każdego zdjęcia była jedna etykieta) 
możesz zostawić tylko etykiety dla znaków klasy *Speed limit*. Wtedy zadaniem modelu, 
będzie detekcja tylko znaków klasy *Speed limit* nawet na zdjęciach, na których obecne są 
także inne znaki z innych klas.

**Przykładowy zbiór danych:**
https://makeml.app/datasets/road-signs

**Wymagania:**

* Analiza problemu i wybranego zbioru danych.
* Preprocessing i augmentacja danych.
* Wybór odpowiedniej architektury, nauka modelu oraz potencjalny fine-tuning.
* Ewaluacja wyników ilościowa (wybrane metryki) oraz jakościowa (wyniki wizualne).
* Prezentacja wyników przy użyciu Jupyter Notebook’a lub LaTex’a.
* **Uwaga:** Rozdziel kod na osobne pliki, nie pisz całego kodu w Jupyter Notebook’u. Użyj go tylko do wizualizacji wyników. Zadbaj także o formatowanie kodu (Python - PEP8) oraz dobre nazewnictwo funkcji i ich opis.

**Wskazówki:**

* Do nauki sieci neuronowych w języku Python możesz skorzystać z takich bibliotek jak PyTorch, TensorFlow lub Keras.
* Możesz skorzystać z transfer learning’u przy uczeniu sieci.
* Pamiętaj, że przy rotacji lub translacji obrazka w ramach augmetacji danych należy także nałożyć te transformacje na koordynaty bounding boxa.

W ramach oceny Twojego zadania rekrutacyjnego będziemy oceniać głównie podejście do 
rozwiązania problemu oraz jakość kodu. Fajnie jakby wyniki Twojego modelu były dobre jednak
nie będzie to główna rzecz, na którą będziemy zwracać uwagę przy ocenie.