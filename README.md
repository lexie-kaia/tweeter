# Tweeter

<br/>

Twitter 클론 코딩

[> View Live](https://lexie-kaia.github.io/tweeter/)

<br/>

![Sequence 01](https://user-images.githubusercontent.com/73787590/142300678-c8a43abc-43af-413c-b3ee-680db461cfd3.gif)

<br/>
<br/>

## Overviews

**v 1.0**

- Mobile-First Web App 구조 분석
- HTML, CSS, JavaScript 기본 스택을 이용한 클론 코딩

**v 2.0**

- Web Component를 활용한 구조화
- TypeScript, Sass(SCSS), Webpack 개발 스택 업그레이드

<br/>
<br/>

## Objectives

**v 1.0**

트위터를 클론 코딩한 이유는 **static web site와 mobile-first web application UI의 차이점을 분석**해보고 싶었기 때문입니다. 프로젝트를 시작할 당시 HTML, CSS, JavaScript 막 배운 상태였기 때문에 보이는 대로 구현하는 것이 목표로 하였습니다.

**v 2.0**

'**10년 뒤에도 React를 쓸 것인가?**'라는 화두를 던지는 **Web Component** 관련 영상을 보았고 문득 이전에 했던 이 프로젝트가 생각났습니다.

HTML(구조), CSS(스타일링), JavaScript(상호작용) 각각의 역할을 기준으로 코드가 분산되어 개발 환경이 복잡해지는 것을 막기 위해 React에선 UI component를 기본 단위로 접근합니다. 하지만 영상을 본 이후 React를 사용하지 않고 component를 만들어보고 싶다는 생각이 들었습니다.

V 2.0에서는 Web Component와 더불어 **코드의 재사용성을 높이고 구조화**하기 위해 CSS는 Sass(SCSS)로 JavaScript는 TypeScript로 개발 스택을 업그레이드하고, 개발 환경 통합하고 자동화하기 위해 Webpack을 사용하였습니다

<br/>
<br/>

## Key Takeaways

### Web Components

<br/>

MDN - [Web technology for developers](https://developer.mozilla.org/en-US/docs/Web)

> Web Components are custom elements that you can define and reuse in your apps.

MDN - [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

> An important aspect of web components is **encapsulation** — being able to keep the markup structure, style, and behavior hidden and separate from other code on the page so that different parts do not clash, and the code can be kept nice and clean.

<br/>

web component는 쉽게 말하자면 custom element를 만드는 기술입니다.

react의 component가 변경된 데이터를 UI에 반영하기 위해 DOM에서 업데이트가 필요한 부분을 빠르게 찾으려고 고안되었다면 **web component**는 **custom element로 encapsulate하여 외부 DOM과 단절된 독립적인 기능을 하는 단위를 만드는 것**을 목적으로 합니다.

- **React Components** - 데이터와 DOM의 동기화
- **Web Components** - 외부 DOM과 분리

Web Component는 별도의 namespace를 가진 독립된 module처럼 작동하기 때문에 전역적으로 적용된 CSS와 JavaScript가 작동하지 않습니다. 다시 말해 스타일링이나 기능을 추가를 위해 node를 특정하려고 CSS에서 selector를 쓰거나 JavaScript에서 querySelector를 사용할 때 web component안의 node는 별도의 DOM 안에 있어서 접근할 수 없습니다.

<br/>

[> Web Components - Custom Elements, Shadow DOM, HTML Templates](https://spring-slipper-6a7.notion.site/Web-Components-a62aa36c4ffa4631b0ffea95d22d72a3)

<br/>

web component는 **custom elements, shadow DOM, HTML templates**이라는 각각의 API로 구성된 기술입니다. web component를 공부하면서 새로 알게 된 내용이 많았지만 제가 흥미롭게 본 것은 web component에서 state를 기억하는 방식입니다.

web component는 **데이터를 전달받고 저장하기 위해 HTML attributes**를 이용합니다. 아래는 간단한 counter를 web component로 만드는 코드입니다. 본 프로젝트에선 이 코드를 응용하여 feed 아래에 있는 menu button을 구현하였습니다.

이 방식은 react에서 데이터를 state에 저장하고 prop으로 전달하는 방식과 비슷하게 보이지만 다른 점이 있습니다. react에서는 state가 virtual DOM에 저장된다고 볼 수 있습니다. react는 state가 변경되면 vitual DOM과 실제 DOM을 비교하여 필요한 부분만 업데이트합니다. 하지만 web component에서 state가 HTML attributes에 있어 실제 DOM에 바로 저장된다고 볼 수 있습니다.

<br/>

```html
<my-counter count="10"></my-counter>
```

```js
class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  render() {
    this.shadow.innerHTML = `
      <h1>Counter</h1>
      ${this.count}
      <button id="btn">Increment</button>
    `;
  }

  connectedCallback() {
    this.render();
    this.addOnClick();
  }

  static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === 'count') {
      this.render();
      this.addOnClick();
    }
  }

  get count() {
    return Number(this.getAttribute('count'));
  }

  set count(val) {
    this.setAttribute('count', String(val));
  }

  addOnClick() {
    const btn = this.shadow.querySelector('#btn');
    btn.addEventListener('click', () => {
      this.count += 1;
    });
  }
}

customElements.define('my-counter', MyCounter);
```

<br/>

![Sequence 02](https://user-images.githubusercontent.com/73787590/142301040-8efb1034-1d79-42b4-83cc-2535ff714b3f.gif)

![Sequence 03](https://user-images.githubusercontent.com/73787590/142301100-4027c207-7127-4da8-acfa-966e20bc2771.gif)

<br/>
<br/>

### Sass(SCSS) - variable, mixin, seletor의 관계

<br/>

이 프로젝트는 component라는 단위에서 시작했기 때문에 '**재사용할 수 있는 최소의 유닛**'에 대해서 여러모로 고민해 볼 수 있는 시간이었습니다.

CSS는 웹의 기술 스택에서 가장 반복되는 코드가 많습니다. Sass(SCSS)는 mixin 등을 이용하여 이것을 쉽게 만들 수 있기 때문에 V 2.0에 도입하였습니다. 기존에 Sass(SCSS)를 알고 있었지만, 이번 프로젝트를 하면서 CSS의 재사용 가능한 단위에 대해서 더 고민하였기 때문에 Sass(SCSS)의 장점을 더 깊게 이해하게 되었습니다.

<br/>

JavaScript에서는 variable → function → object로 재사용 가능한 최소 유닛의 단위가 올라갑니다.

**JavaScript**

- 여러 번 써야 하는 값을 기억하는 variable
- 반복해야 하는 일을 정의한 function
- 값과 기능을 모아놓은 object

<br/>

CSS에선 selector가 가장 중요한 단위입니다. CSS도 JavaScript처럼 값을 저장할 수 있는 variable이 있지만 이를 selector와 연관 지어 JavaScript의 variable과 object 관계처럼 이해할 수 없었습니다. Sass(SCSS)는 이 사이에 mixin을 넣어 CSS의 유닛 단위를 JavaScript와 비슷한 모델로 사용할 수 있게 만듭니다.

**Sass(SCSS)**

- 여러 번 써야 하는 속성 값을 저장하는 variable
- 반복이 필요한 코드 조각을 생성하는 mixin
- element에 적용할 스타일을 모아놓은 selector

<br/>

V 1.0을 개발할 때 모양이 비슷하지만 조금씩 다른 버튼들을 만들면서 class selector가 꼬이는 상황이 발생하였습니다. 돌이켜보면 class selector를 특정 코드 조각을 반복하기 위해 function처럼 썼다가 element의 스타일을 담기 위한 object처럼 썼다가 이 두 가지 경우를 구별하지 않고 사용해서 일어난 일이었습니다. Sass(SCSS)는 mixin으로 이를 확실하게 구별하기 때문에 보다 쉽게 CSS를 구조화할 수 있습니다.

<br/>

```scss
$white: #ffffff;
$blue: #1da1f2;
$dark-blue: #1b95e0;
```

```scss
@mixin btn-size-48($width: null) {
  border-radius: 24px;
  height: 48px;

  @if $width != null {
    width: #{$width};
  }
}
```

```scss
.tweet-btn {
  @include inline-flex-center;
  @include btn-size-48(100%);
  @include btn-color($blue, $white);
  @include btn-effect($dark-blue);
  @include typo-large(700);
  margin-top: 16px;
  text-transform: capitalize;
}
```

<br/>
