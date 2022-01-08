---
to: src/screens/index.ts
inject: true
append: true
skip_if: ./<%= fileName %>
---
export * from './<%= fileName %>';