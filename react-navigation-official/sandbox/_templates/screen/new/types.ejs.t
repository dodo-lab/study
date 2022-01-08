---
to: src/@types/react-navigation.d.ts
inject: true
after: "type <%= paramList %>"
skip_if: "  <%= screenName %>:"
---
    <%= screenName %>: undefined;