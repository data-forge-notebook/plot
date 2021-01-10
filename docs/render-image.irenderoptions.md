<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@plotex/render-image](./render-image.md) &gt; [IRenderOptions](./render-image.irenderoptions.md)

## IRenderOptions interface

Options for image rendering.

<b>Signature:</b>

```typescript
export interface IRenderOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [electronPath?](./render-image.irenderoptions.electronpath.md) | string | <i>(Optional)</i> Path to electron, so that electron can be installed separately to a different location and shared between the various packages that need it.<!-- -->Electron is used to render charts and capture them to images. |
|  [nightmarePath?](./render-image.irenderoptions.nightmarepath.md) | string | <i>(Optional)</i> Path to Nighmare so that a separate external version of Nightmare can be used if necessary. |
|  [openImage?](./render-image.irenderoptions.openimage.md) | boolean | <i>(Optional)</i> Open the image in your default image viewer. |
|  [showChartDef?](./render-image.irenderoptions.showchartdef.md) | boolean | <i>(Optional)</i> Set to true to show the chart definition after expansion and also after formatting. |
