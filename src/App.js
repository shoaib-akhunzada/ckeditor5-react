import logo from './logo.svg';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-with-track-changes';

function App() {
  return (
        
    <div className="App">
        <h2>Using CKEditor 5 from source in React</h2>
               
             <CKEditor
                    editor={ ClassicEditor }
                    config={ {
                        disableHostCheck: false,
                        toolbar: {
                            items: [
                                'heading',
                                '|',
                                'bold',
                                'italic',
                                'link',
                                'bulletedList',
                                'numberedList',
                                '|',
                                'outdent',
                                'indent',
                                '|',
                                'imageUpload',
                                'blockQuote',
                                'insertTable',
                                'mediaEmbed',
                                'undo',
                                'redo',
                                'MathType',
                                'ChemType',
                                'underline',
                                'CKFinder'
                            ]
                        },
                        language: 'en',
                        image: {
					toolbar: [
						'imageTextAlternative',
						'imageStyle:full',
						'imageStyle:side'
					]
				},
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells'
					]
				},
                                licenseKey: '',
                    } }
                    data="<p>Hello from CKEditor 5!</p>"
                   
                />
    </div>
  );
}

export default App;
