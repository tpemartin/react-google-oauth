# Usage

Insert the following two tags in the head of `/public/index.html`

```
<meta name="google-signin-client_id" content="{your google client id}"/>
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

then 
```
import { SignIn } from '@tpemartin/react-google-oauth';

function App(){
    return <SignIn/>
}
```

# Credits
The npm package use the boilerplate code from [Codify Tools](https://www.codifytools.com/blog/react-npm-package).
