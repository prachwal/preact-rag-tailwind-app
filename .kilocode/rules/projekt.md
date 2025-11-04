# projekt.md

Zasady dotyczące tworzenia projektów z użyciem Preact, Tailwind CSS, Vite, TypeScript, Vitest, ESLint, Prettier i TypeDoc.

## Guidelines

### Technologie podstawowe

- Używaj TypeScript 5 do pisania bezpiecznego i skalowalnego kodu.
- Buduj aplikacje za pomocą Vite 7.
- Stosuj Tailwind 4 CSS do stylizacji komponentów Preact.
- Upewnij się, że projekt jest zgodny z Node.js 22+ i npm.

### Jakość kodu

- Nie używaj `any` jako typu w TypeScript.
- Utrzymuj wysoką jakość kodu poprzez regularne używanie ESLint i Prettier.
- Używaj tagów HTML5 w plikach .tsx.

### Testowanie

- Używaj Vitest do testowania jednostkowego i integracyjnego.
- Pisz testy jednostkowe dla każdego komponentu i funkcji w projekcie na etapie tworzenia.
- Pisz testy integracyjne dla kluczowych przepływów użytkowników w aplikacji.
- Pisz Storybook stories dla każdego komponentu UI, aby ułatwić wizualne testowanie i dokumentację.

### Dokumentacja

- Dokumentuj kod za pomocą TypeDoc.

### Struktura i konfiguracja projektu

- Utrzymuj strukturę katalogów zgodną z najlepszymi praktykami dla projektów Preact i Vite.
- Konfiguruj skrypty npm do automatyzacji zadań deweloperskich, takich jak uruchamianie serwera deweloperskiego, budowanie aplikacji, testowanie, linting i generowanie dokumentacji.

### Zarządzanie projektem

- Używaj systemu kontroli wersji (np. Git) do zarządzania kodem źródłowym i współpracy z innymi deweloperami.
- Regularnie aktualizuj zależności projektu, aby korzystać z najnowszych funkcji i poprawek bezpieczeństwa.
