# Links and skills
![Baner](https://user-images.githubusercontent.com/63140632/135496771-2c2c2464-e4a7-4543-8ec4-36687c8471cf.png)

A website built using HTML, CSS and JavaScript to host all the important links and skills of an individual.  
Make changes to info.json and the website will render itself based on it.

## Structure of [assets/info.json](./assets/info.json)
```
(start)
├── name (String)
├── image (String)
├── designation (String)
├── heading (String)
├── skills (Array)
|   ├── <Skill 1>
|   ├── <Skill 2>
|   ├── <Skill 3>
|   └── ...
|
└── sections (Array)
    ├── Section 1 (Object)
    |   ├── heading (String / false)
    |   └── links (Array)
    |       ├── Link 1 (Object)
    |       |   ├── title (String)
    |       |   ├── icon (String)
    |       |   |   Note: Use font awesome <i> tags
    |       |   |   Example: "<i class='fas fa-file-alt'></i>"
    |       |   └── url (String)
    |       |
    |       ├── Link 2 (Object)
    |       |   ├── title (String)
    |       |   ├── icon (String)
    |       |   |   Note: Use font awesome <i> tags
    |       |   |   Example: "<i class='fas fa-file-alt'></i>"
    |       |   └── url (String)
    |       |
    |       └── ...
    |
    ├── Section 2 (Object)
    |   ├── heading (String / false)
    |   └── links (Array)
    |       ├── Link 1 (Object)
    |       |   ├── title (String)
    |       |   ├── icon (String)
    |       |   |   Note: Use font awesome <i> tags
    |       |   |   Example: "<i class='fas fa-file-alt'></i>"
    |       |   └── url (String)
    |       |
    |       ├── Link 2 (Object)
    |       |   ├── title (String)
    |       |   ├── icon (String)
    |       |   |   Note: Use font awesome <i> tags
    |       |   |   Example: "<i class='fas fa-file-alt'></i>"
    |       |   └── url (String)
    |       |
    |       └── ...
    |
    └── ...
(end)
```
## Structure of page
![Structure](https://user-images.githubusercontent.com/63140632/135500258-ea590213-8a4c-4d1a-ac85-ce290a85a6c1.png)

## Contributors
<table>
  <tr>
    <td align="center"><a href="https://www.nimish-jain.com/"><img src="https://avatars.githubusercontent.com/u/63140632?v=4" width="100px;" alt=""/><br /><sub><b>Nimish Jain</b></sub></a><br /><a href="https://github.com/nimishjn/links/commits?author=nimishjn" title="Code">💻</a> <a href="https://github.com/nimishjn/links/commits?author=nimishjn" title="Documentation">📖</a></td>
  </tr>
</table>
