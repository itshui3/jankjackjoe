r2 learnings: 
- trying to pass references of typewriter's listener or given arg to react and manipulate it manually is a bad idea. an 8 hour waste of time BAD IDEA =U
- to try and pull game mechs with typewriter-effect package requires re-render of the top level component API to produce meaningful changes. and it has to be SEPARATE component files as well. it doesn't want to re-render off the same component
- I should probably just write my own algorithm to do this manually instead of trying to make a component that renders typing onLoad work in response to other event firings
