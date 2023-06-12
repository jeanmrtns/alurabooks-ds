"use strict";(self.webpackChunkalurabooks_ds=self.webpackChunkalurabooks_ds||[]).push([[493],{"./stories/AbButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AbButton_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledButton=styled_components_browser_esm.zo.button`
  border: none;
  font-weight: bold;
  color: white;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  transition: background-color 0.2s ease-in-out;

  ${({variant})=>"primary"===variant&&styled_components_browser_esm.iv`
      background-color: #007bff;

      &:hover {
        background-color: #0069d9;
      }
    `};

  ${({variant})=>"secondary"===variant&&styled_components_browser_esm.iv`
        background-color: #6c757d;
        border: 2px solid #6c757d;

        &:hover {
          background-color: #5a6268;
        }
    `};

  &:disabled {
    background-color: #6c757d;
    opacity: 0.65;
    cursor: not-allowed;
  }
  
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function AbButton_AbButton({children,variant,...props}){return(0,jsx_runtime.jsx)(StyledButton,{variant,...props,children})}AbButton_AbButton.displayName="AbButton";try{AbButton_AbButton.displayName="AbButton",AbButton_AbButton.__docgenInfo={description:"",displayName:"AbButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AbButton/index.tsx#AbButton"]={docgenInfo:AbButton_AbButton.__docgenInfo,name:"AbButton",path:"src/components/AbButton/index.tsx#AbButton"})}catch(__react_docgen_typescript_loader_error){}try{AbButton.displayName="AbButton",AbButton.__docgenInfo={description:"",displayName:"AbButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#AbButton"]={docgenInfo:AbButton.__docgenInfo,name:"AbButton",path:"src/index.tsx#AbButton"})}catch(__react_docgen_typescript_loader_error){}const AbButton_stories={title:"Components/AdButton",component:AbButton_AbButton},Primary={args:{variant:"primary",children:"Click me"}},Secondary={args:{variant:"secondary",children:"Click me"}},Disabled={args:{disabled:!0,children:"Disabled"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    children: 'Click me'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary',\n    children: 'Click me'\n  }\n}",...Secondary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    children: 'Disabled'\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Disabled"]}}]);
//# sourceMappingURL=AbButton-stories.7f2c90df.iframe.bundle.js.map