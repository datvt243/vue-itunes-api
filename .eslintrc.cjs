/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        /* 'indent-legacy': ['error', 4], */
        'array-bracket-spacing': ['error', 'never'],
        'vue/no-v-model-argument': 'off',
        'vue/no-v-html': 'off',
        'vue/no-deprecated-html-element-is': 'off',
        'vue/valid-v-model': 'off',
        'vue/valid-next-tick': 'error',
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-child-content': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-ref-as-operand': 'error',
        'vue/no-side-effects-in-computed-properties': 'off' /* !!! */,
        'vue/no-template-key': 'error',
        'vue/no-use-computed-property-like-method': 'error',
        'vue/no-useless-template-attributes': 'error',
        'vue/valid-v-for': 'error',
        'vue/require-valid-default-prop': 'error',

        'vue/no-v-text-v-html-on-component': ['error', { allow: ['router-link', 'nuxt-link'] }],
        'vue/no-use-v-if-with-v-for': [
            'error',
            {
                allowUsingIterationVar: false
            }
        ],
        'vue/no-mutating-props': [
            'error',
            {
                shallowOnly: false
            }
        ],
        'vue/no-duplicate-attributes': [
            'error',
            {
                allowCoexistClass: true,
                allowCoexistStyle: true
            }
        ],
        'vue/no-dupe-keys': [
            'error',
            {
                groups: []
            }
        ],

        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 5
                },
                multiline: {
                    max: 1
                }
            }
        ],
        'vue/singleline-html-element-content-newline': [
            'error',
            {
                ignoreWhenNoAttributes: false,
                ignoreWhenEmpty: true,
                ignores: ['pre', 'textarea', 'router-link', 'template']
            }
        ],

        /* Strongly ------------------------ */
        'vue/attribute-hyphenation': [
            'error',
            'always',
            {
                ignore: []
            }
        ],
        'vue/first-attribute-linebreak': [
            'error',
            {
                singleline: 'ignore',
                multiline: 'below'
            }
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
                selfClosingTag: {
                    singleline: 'never',
                    multiline: 'always'
                }
            }
        ],
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always'
            }
        ],
        'vue/html-indent': [
            'error',
            4
            /* {
            attribute: 1,
            baseIndent: 0,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }, */
        ],

        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],

        'vue/multiline-html-element-content-newline': [
            'error',
            {
                ignoreWhenEmpty: true,
                ignores: ['pre', 'textarea'],
                allowEmptyLines: false
            }
        ],
        'vue/no-multi-spaces': [
            'error',
            {
                ignoreProperties: true
            }
        ],
        'vue/prop-name-casing': ['error', 'camelCase'],
        /* 'vue/v-slot-style': [
        'error',
        {
            atComponent: 'shorthand',
            default: 'shorthand',
            named: 'shorthand',
        },
    ], */

        'vue/v-bind-style': ['error', 'shorthand'],

        'vue/v-on-style': ['error', 'shorthand'],
        'vue/require-default-prop': 'error',

        'vue/require-explicit-emits': [
            'error',
            {
                allowProps: false
            }
        ],
        /* 'vue/v-on-event-hyphenation': [
        'error',
        'always',
        {
            autofix: false,
            ignore: [],
        },
    ], */

        /* Vue 3 */
        'vue/no-expose-after-await': 'error',
        'vue/no-lifecycle-after-await': 'error',
        'vue/no-v-for-template-key-on-child': 'error',
        'vue/no-watch-after-await': 'error',

        /* ------- */
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT'
                ],
                alphabetical: false
            }
        ],
        /* 'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
            registeredComponentsOnly: true,
            ignores: [],
        },
    ], */
        'vue/custom-event-name-casing': [
            'error',
            'kebab-case',
            {
                ignores: []
            }
        ],
        'vue/define-macros-order': [
            'error',
            {
                order: [
                    'defineOptions',
                    'defineModel',
                    'defineProps',
                    'defineEmits',
                    'defineSlots'
                ],
                defineExposeLast: false
            }
        ],
        'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
        'vue/html-button-has-type': [
            'error',
            {
                button: true,
                submit: true,
                reset: true
            }
        ],
        'vue/html-comment-content-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never'
            },
            {
                exceptions: []
            }
        ],
        'vue/html-comment-content-spacing': [
            'error',
            'always',
            {
                exceptions: []
            }
        ],
        'vue/no-multiple-objects-in-class': 'error',
        'vue/array-bracket-spacing': 'off',

        'vue/order-in-components': 'off'
        /* 'vue/order-in-components': [
        'error',
        {
            order: [
                'el',
                'name',
                'key',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                ['provide', 'inject'],
                'ROUTER_GUARDS',
                'layout',
                'middleware',
                'validate',
                'scrollToTop',
                'transition',
                'loading',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'emits',
                'setup',
                'asyncData',
                'data',
                'fetch',
                'head',
                'computed',
                'watch',
                'watchQuery',
                'LIFECYCLE_HOOKS',
                'methods',
                ['template', 'render'],
                'renderError',
            ],
        },
    ], */
    }
}
