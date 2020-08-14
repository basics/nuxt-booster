<template>
  <div>
    <organism-preview-container>
      <template>
        <div>
          <ul>
            <li id="criticalFontAssignSimple" v-font="$fonts.getFont('Comic Neue', 400, 'normal').isCritical()">
              font assign simple
            </li>
            <hr>
            <li id="criticalFontAssignBySingleSelector" v-font="$fonts.getFont('Comic Neue', 700, 'normal').addSelector('strong').isCritical()">
              font assign by <strong>single selector</strong>
            </li>
            <li>
              <span
                id="criticalFontAssignByMultipleVariances"
                v-font="[
                  $fonts.getFont('Comic Neue', 700, 'normal').addSelector('strong').isCritical(),
                  $fonts.getFont('Comic Neue', 700, 'italic').addSelector('i').isCritical()
                ]"
              >font assign by <strong>multiple</strong> <i>variances</i></span>
            </li>
            <hr>
            <li>
              <span
                id="criticalFontAssignByMultipleSelectorsString"
                v-font="[
                  $fonts.getFont('Comic Neue', 700, 'normal').addSelector('strong, b').isCritical()
                ]"
              >font assign by <strong>multiple</strong> <b>selectors (String)</b></span>
            </li>
            <li>
              <span
                id="criticalFontAssignByMultipleSelectorsArray"
                v-font="[
                  $fonts.getFont('Comic Neue', 400, 'italic').addSelector(['i', 'em']).isCritical()
                ]"
              >font assign by <i>multiple</i> <em>selectors (Array)</em></span>
            </li>
            <hr>
            <li>
              <span
                id="criticalFontAssignByDeepSelector"
                v-font="[
                  $fonts.getFont('Comic Neue', 700, 'italic').addSelector('strong > i').isCritical()
                ]"
              >font assign by <strong><i>deep</i></strong> selector</span>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:title>
        <p>Critical - v-font</p>
      </template>
    </organism-preview-container>
    <organism-preview-container>
      <template>
        <div>
          <ul>
            <li v-font="$fonts.getFont('Lobster Two', 400, 'normal')">
              Basic font assign
            </li>
            <hr>
            <li v-font="$fonts.getFont('Lobster Two', 700, 'normal').addSelector('strong')">
              font assign by <strong>single selector</strong>
            </li>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Lobster Two', 700, 'normal').addSelector('strong'),
                  $fonts.getFont('Lobster Two', 700, 'italic').addSelector('i')
                ]"
              >font assign by <strong>multiple</strong> <i>variances</i></span>
            </li>
            <hr>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Lobster Two', 700, 'normal').addSelector('strong, b')
                ]"
              >font assign by <strong>multiple</strong> <b>selectors (String)</b></span>
            </li>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Lobster Two', 400, 'italic').addSelector(['i', 'em'])
                ]"
              >font assign by <i>multiple</i> <em>selectors (Array)</em></span>
            </li>
            <hr>
            <li>
              <span
                v-font="[
                  $fonts.getFont('Lobster Two', 700, 'italic').addSelector('strong > i')
                ]"
              >font assign by <strong><i>deep</i> selector</strong></span>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:title>
        <p>Lazy - v-font</p>
      </template>
    </organism-preview-container>
  </div>
</template>
