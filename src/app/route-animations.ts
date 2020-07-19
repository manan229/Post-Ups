import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from "@angular/animations";

export const fader = trigger("routeAnimations", [
  transition("* <=> *", [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          opacity: 0,
          transform: "translateY(100px)",
        }),
      ],
      { optional: true }
    ),
    query(
      ":enter",
      [
        animate(`500ms ease-in-out`),
        style({ opacity: 1, transform: "translateY(0)" }),
      ],
      { optional: true }
    ),
  ]),
]);
