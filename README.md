# Device Supported Metrics
An interactive view of the Metric Families, Metrics, Vendor Certifications, and Expressions for a given device (and it's associated components)


![](./screenShot.jpg?raw=true "Example Screenshot")

##Installation Instructions:

1. Deploy App via CAPC App Installer
2. Add an App View to a Device context page
3. Select the Metric Family to view the related metrics, and vendor certification expressions
4. Add URL to app location with key parameters defined (see below)
5. For any user other than admin you will have to add their username to the netqosportal database on the CAPC server:
..* mysql -D netqosportal
..* update general set value=('admin,<username>') where attribute='daProxyValidUsers';

##Theme Modification
This App leverages BootStrap to enable simple styling and UI modifications. To modify the theme of the App, edit the index.html file and change the CSS associated with the BootStrap compatible or custom theme.


===================================================================================

License (refer to license.txt in folder for 3rd party license details)

Copyright (c) 2016 CA Technologies
 
The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

===================================================================================

