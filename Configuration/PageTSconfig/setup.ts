# Include the BackendLayouts
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:ns_theme_cleanblog/Configuration/PageTSconfig/BackendLayouts" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:ns_theme_cleanblog/Configuration/PageTSconfig/GridElements" extensions="ts">

# Remove default custom elements from EXT:ns_basetheme 
mod.wizards.newContentElement.wizardItems.extra {
  show := removeFromList(ns_imageteaser, ns_record, ns_slider)
}