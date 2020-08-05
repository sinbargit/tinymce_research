import 'tinymce/skins/content/default/content.css';
import 'tinymce/skins/ui/oxide/content.css';
import 'tinymce/skins/ui/oxide/skin.css';
// import 'tinymce/skins/ui/oxide/fonts/tinymce-mobile.woff';
// Import TinyMCE
import tinymce from 'tinymce/tinymce';

// Default icons are required for TinyMCE 5.3 or above
import 'tinymce/icons/default';

// A theme is also required
import 'tinymce/themes/silver';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';

// Initialize the app
tinymce.init({
    selector: '#temp',
    plugins: ['paste', 'link'],
    content_css:'default'
});

tinymce.init({ selector: '#temp' });

