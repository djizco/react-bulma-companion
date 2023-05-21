# React Bulma Companion Changelog

## 0.5.3

### New Features

- Adds Typescript support. Declaration files created for all components.

## 0.5.2

### Bug Fixes

- Select Option now defaults selected to undefined. Fixes react warning. Update docs.

## 0.5.1

### Bug Fixes

- Fixes an issue with columns defaulting to desktop instead of tablet.

## 0.5.0

### Breaking Changes

- Removes all Legacy Components. They are not really needed since components are mostly backwards-compatible. Update docs to help support older Bulma versions.
- Refactor how `Column` and `Columns` props work to be more intuitive.

### New Features

- Add `Element` component. This component provides helper classes and is rendered under the hood of every component.

## 0.4.0

### Breaking Changes

- Remove `link`, `header`, and `label` props. Use `component` prop instead. Remove Deprecation warning. Effected Components are: `Button`, `Box`, `Card.FooterItem`, `Card.HeaderIcon`, `Dropdown.Item`, `Level.Item`, `Navbar.Item`, `Panel.Block`, `Tag`, `Title`.

### New Features

- Update Current Version to Bulma 0.9.4
- Add Button `responsive` prop
- Add legacy Component `Button-0.9.3`

## 0.3.0

### New Features

- Update Current Version to Bulma 0.9.3.
- Add Legacy Component `Content-0.9.2`.
- Add Legacy Component `File-0.9.2`.

## 0.2.1

### Bug Fixes

- Fix issue where `Hero` and `Textarea` components were importing the incorrect component in the dist builds.

## 0.2.0

### New Features

- Update Current Version to Bulma 0.9.2.
- Add `Icon.Text` Subcomponent.
- Add Legacy Component Icon-0.9.1.

### Improvements

- All components now accept a `component` prop that allows you to pass in a custom component.
- Expand Docs for the `Card` Component.
- Update Storybook to 6.3.

### Bug Fixes

- Docs: Code block spacing should now be fixed.

### Deprecation warning

- Using the `link`, `header`, or `label` prop is now deprecated. Use the `component` prop instead. This will be removed in a future version.

## 0.1.2

### Bug Fixes

- Remove onClick prop-type from `Button`.

## 0.1.1

### Bug Fixes

- Fix legacy dev build.

## 0.1.0

- Initial Release.
