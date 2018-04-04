

## Zawartość repozytorium

* Konfiguracje kontenerów dla Dockera - [Selenium](https://github.com/SeleniumHQ/docker-selenium), [Node](https://github.com/easysend/panel/blob/master/Dockerfile)
* Zestaw testów do testowania strony www i panelu klienta za pomocą biblioteki [Protractor](https://angular.github.io/protractor/#/)

Aplikacja wymaga:

* NodeJS w wersji `5.x`
* NPM w wersji `3.x`

## Instrukcja uruchomienia

Testy uruchamiane są za pomocą polecenia

```bash
npm run test --base_url=https://www....pl --selenium_url=http://selenium:4444/wd/hub
```

Za pomocą parametrów `base_url` i `selenium_url` można ustawić adres strony do testowania oraz adres serwera selenium. Oba parametry są opcjonalne a ich domyślne wartości podane są powyżej.

##### Grabs failure screenshots

If you want to grab a screenshot on failure You need only 
export `$CIRCLE_ARTIFACT` variable. 
On every failure step browser saves a screenshot. 

###### Unix platform
```bash
export CIRCLE_ARTIFACTS=/path/to/artifacts
```
