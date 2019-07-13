# How to use

```javascript
import * as Images from '@/resources/images';
import { logo } from '@/resources/images';

<Image source={Images.logo} />

<Image source={logo} />

<Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />
<Image source={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}} />
```
