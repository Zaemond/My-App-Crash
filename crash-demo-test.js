(self.webpackChunkgame_crash = self.webpackChunkgame_crash || []).push([
  [7716186, 2384451],
  {
    58896881: (t, e) => {
      "use strict";
      e.A = (t, e) => {
        const r = t.__vccOpts || t;
        for (const [n, o] of e) r[n] = o;
        return r;
      };
    },
    1039594: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => j });
      var n = r(27335873),
        o = { class: "crash-history" },
        i = { class: "crash-history__header" },
        a = { class: "crash-history__title" },
        s = { class: "crash-history__main" },
        c = { class: "crash-history-table crash-history__table scrollbar" },
        u = {
          class: "crash-history-table__row crash-history-table__row--header",
        },
        l = {
          class: "crash-history-table__cell crash-history-table__cell--header",
        },
        p = {
          class: "crash-history-table__cell crash-history-table__cell--header",
        },
        f = {
          class: "crash-history-table__cell crash-history-table__cell--header",
        },
        h = {
          class: "crash-history-table__cell crash-history-table__cell--header",
        },
        d = {
          class: "crash-history-table__cell crash-history-table__cell--header",
        },
        m = {
          class: "crash-history-table__cell crash-history-table__cell--header",
        },
        v = {
          class: "crash-history-table__cell crash-history-table__cell--header",
        },
        b = { class: "crash-history-table__cell" },
        y = { class: "crash-history-table__cell" },
        g = { class: "crash-history-table__cell" },
        _ = { class: "crash-history-table__cell" },
        S = { class: "crash-history-table__cell" },
        w = { class: "crash-history-table__cell" },
        A = { class: "crash-history-table__cell" },
        E = { key: 0, class: "crash-history-empty crash-history__empty" },
        B = { class: "crash-history-empty__text" };
      r(29204099),
        r(53375191),
        r(73503923),
        r(35669252),
        r(44381336),
        r(95723650),
        r(54660056),
        r(4835009),
        r(62951728),
        r(97200626),
        r(17522308),
        r(4421388),
        r(95440747),
        r(20037566),
        r(53083784),
        r(1906035),
        r(32570708),
        r(10827376),
        r(83722648),
        r(69616513),
        r(21313645),
        r(49684748),
        r(74018857);
      var x = r(3713828),
        O = r(3505111),
        k = r(25000323);
      function I(t) {
        return (
          (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          I(t)
        );
      }
      function C(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function N(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(r), !0).forEach(function (e) {
                P(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function P(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != I(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != I(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == I(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const T = {
        name: "CrashHistory",
        mixins: [O.PopupMixin, k.CurrencyMixin],
        computed: N(
          N(
            N({}, (0, x.mapGetters)("crash", ["history"])),
            (0, x.mapGetters)("user", ["accounts", "activeAccountCurrency"])
          ),
          (0, x.mapGetters)("currency", ["currentCurrency"])
        ),
        methods: {
          getRowClass: function (t) {
            return t
              ? "crash-history-table__row--win"
              : "crash-history-table__row--lose";
          },
          getCurrency: function (t) {
            var e, r;
            return (
              (null ===
                (e = this.accounts.find(function (e) {
                  return e.id === t;
                })) || void 0 === e
                ? void 0
                : e.currency.code) ||
              (null === (r = this.activeAccountCurrency) || void 0 === r
                ? void 0
                : r.code) ||
              this.currentCurrency.code
            );
          },
          getBetAmountWithCurrency: function (t, e) {
            var r = this.getCorrectCurrencyCode(this.getCurrency(t));
            return "".concat(e, " ").concat(r);
          },
          getWinningAmountWithCurrency: function (t, e) {
            var r = this.getCorrectCurrencyCode(this.getCurrency(t));
            return "".concat(e, " ").concat(r);
          },
          getKey: function (t) {
            var e = t.date,
              r = t.stageId,
              n = t.betIndex;
            return "".concat(e, "_").concat(r, "_").concat(n);
          },
        },
      };
      const j = (0, r(58896881).A)(T, [
        [
          "render",
          function (t, e, r, x, O, k) {
            return (
              (0, n.openBlock)(),
              (0, n.createElementBlock)("div", o, [
                (0, n.createElementVNode)("div", i, [
                  (0, n.createElementVNode)(
                    "p",
                    a,
                    (0, n.toDisplayString)(t.$t("crash.history")),
                    1
                  ),
                ]),
                (0, n.createElementVNode)("div", s, [
                  (0, n.createElementVNode)("div", c, [
                    (0, n.createElementVNode)("div", u, [
                      (0, n.createElementVNode)(
                        "p",
                        l,
                        (0, n.toDisplayString)(t.$t("common.date")),
                        1
                      ),
                      (0, n.createElementVNode)(
                        "p",
                        p,
                        (0, n.toDisplayString)(t.$t("common.betGamesTime")),
                        1
                      ),
                      (0, n.createElementVNode)(
                        "p",
                        f,
                        (0, n.toDisplayString)(t.$t("crash.roundId")),
                        1
                      ),
                      (0, n.createElementVNode)(
                        "p",
                        h,
                        (0, n.toDisplayString)(t.$t("common.bet")),
                        1
                      ),
                      (0, n.createElementVNode)(
                        "p",
                        d,
                        (0, n.toDisplayString)(t.$t("common.coef")),
                        1
                      ),
                      (0, n.createElementVNode)(
                        "p",
                        m,
                        (0, n.toDisplayString)(t.$t("crash.resultsPrize")),
                        1
                      ),
                      (0, n.createElementVNode)(
                        "p",
                        v,
                        (0, n.toDisplayString)(t.$t("common.betGamesCrash")),
                        1
                      ),
                    ]),
                    ((0, n.openBlock)(!0),
                    (0, n.createElementBlock)(
                      n.Fragment,
                      null,
                      (0, n.renderList)(t.history, function (t) {
                        return (
                          (0, n.openBlock)(),
                          (0, n.createElementBlock)(
                            "div",
                            {
                              key: k.getKey(t),
                              class: (0, n.normalizeClass)([
                                k.getRowClass(t.winningAmount),
                                "crash-history-table__row",
                              ]),
                            },
                            [
                              (0, n.createElementVNode)(
                                "p",
                                b,
                                (0, n.toDisplayString)(t.date),
                                1
                              ),
                              (0, n.createElementVNode)(
                                "p",
                                y,
                                (0, n.toDisplayString)(t.time),
                                1
                              ),
                              (0, n.createElementVNode)(
                                "p",
                                g,
                                (0, n.toDisplayString)(t.stageId),
                                1
                              ),
                              (0, n.createElementVNode)(
                                "p",
                                _,
                                (0, n.toDisplayString)(
                                  k.getBetAmountWithCurrency(
                                    t.balanceId,
                                    t.betAmount
                                  )
                                ),
                                1
                              ),
                              (0, n.createElementVNode)(
                                "p",
                                S,
                                " x" +
                                  (0, n.toDisplayString)(t.userCoefficient),
                                1
                              ),
                              (0, n.createElementVNode)(
                                "p",
                                w,
                                (0, n.toDisplayString)(
                                  k.getWinningAmountWithCurrency(
                                    t.balanceId,
                                    t.winningAmount
                                  )
                                ),
                                1
                              ),
                              (0, n.createElementVNode)(
                                "p",
                                A,
                                " x" +
                                  (0, n.toDisplayString)(t.crashCoefficient),
                                1
                              ),
                            ],
                            2
                          )
                        );
                      }),
                      128
                    )),
                  ]),
                  t.history.length
                    ? (0, n.createCommentVNode)("", !0)
                    : ((0, n.openBlock)(),
                      (0, n.createElementBlock)("div", E, [
                        e[0] ||
                          (e[0] = (0, n.createElementVNode)(
                            "div",
                            { class: "crash-history-empty__ico" },
                            null,
                            -1
                          )),
                        (0, n.createElementVNode)(
                          "p",
                          B,
                          (0, n.toDisplayString)(
                            t.$t("crash.historyEmptyText")
                          ),
                          1
                        ),
                      ])),
                ]),
              ])
            );
          },
        ],
      ]);
    },
    68124156: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => P });
      var n = r(27335873),
        o = { class: "crash-players-bets" },
        i = { class: "crash-players-bets__total crash-total" },
        a = { class: "crash-total__field" },
        s = { class: "crash-total__text crash-text" },
        c = {
          class: "crash-total__value crash-total__value--players crash-text",
        },
        u = { class: "crash-total__field" },
        l = { class: "crash-total__text crash-text" },
        p = { class: "crash-total__value crash-total__value--bets crash-text" },
        f = { class: "crash-total__field" },
        h = { class: "crash-total__text crash-text" },
        d = {
          class: "crash-total__value crash-total__value--prize crash-text",
        },
        m = { class: "crash-players-bets__results crash-results" },
        v = {
          class: "crash-results-table__row crash-results-table__row--header",
        },
        b = {
          class: "crash-results-table__cell crash-results-table__cell--header",
        },
        y = {
          class: "crash-results-table__cell crash-results-table__cell--header",
        },
        g = {
          class: "crash-results-table__cell crash-results-table__cell--header",
        },
        _ = {
          class: "crash-results-table__cell crash-results-table__cell--header",
        },
        S = { class: "crash-results-table__cell" },
        w = { class: "crash-results-table__cell" },
        A = { class: "crash-results-table__cell" },
        E = { class: "crash-results-table__cell" };
      r(29204099),
        r(53375191),
        r(73503923),
        r(35669252),
        r(44381336),
        r(54660056),
        r(62951728),
        r(97200626),
        r(17522308),
        r(4421388),
        r(95440747),
        r(20037566),
        r(53083784),
        r(1906035),
        r(32570708),
        r(10827376),
        r(83722648),
        r(21313645),
        r(58074670),
        r(49684748),
        r(74018857);
      var B = r(3713828),
        x = r(12651039);
      function O(t) {
        return (
          (O =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          O(t)
        );
      }
      function k(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function I(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                C(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function C(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != O(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != O(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == O(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const N = {
        name: "CrashPlayersBoard",
        props: { getAmountSum: { type: Function, required: !0 } },
        data: function () {
          return {
            consts: {
              ROW_CLASSES: {
                WIN: "crash-results-table__row--win",
                LOSE: "crash-results-table__row--loss",
                USER: "crash-results-table__row--user",
              },
            },
          };
        },
        computed: I(
          I(
            I(
              I(
                I(
                  {},
                  (0, B.mapGetters)("crash", [
                    "stageStatusId",
                    "players",
                    "betsAmount",
                    "totalGain",
                    "countAllPlayers",
                    "isResultReceived",
                  ])
                ),
                (0, B.mapGetters)("currency", ["computedCurrency"])
              ),
              (0, B.mapGetters)("resultGame", ["resultMsg"])
            ),
            (0, B.mapGetters)("application", ["isMobileView"])
          ),
          {},
          {
            notAllPlayersAreVisible: function () {
              return this.countAllPlayers > this.isMobileView ? x.ZA : x.Z4;
            },
            hasPlayerBet: function () {
              return this.players.some(function (t) {
                return !!t.itsPlayersAccount;
              });
            },
          }
        ),
        methods: {
          getRowClasses: function (t) {
            var e = t.itsPlayersAccount,
              r = void 0 !== e && e,
              n = t.winningAmount,
              o = void 0 === n ? 0 : n,
              i = !o && this.stageStatusId === x.w7.isEnded,
              a = this.hasPlayerBet && i && this.isResultReceived,
              s = !this.hasPlayerBet && i;
            return C(
              C(
                C({}, this.consts.ROW_CLASSES.USER, r),
                this.consts.ROW_CLASSES.WIN,
                o > 0
              ),
              this.consts.ROW_CLASSES.LOSE,
              a || s
            );
          },
        },
      };
      const P = (0, r(58896881).A)(N, [
        [
          "render",
          function (t, e, r, B, x, O) {
            return (
              (0, n.openBlock)(),
              (0, n.createElementBlock)("div", o, [
                (0, n.createElementVNode)("div", i, [
                  (0, n.createElementVNode)("div", a, [
                    (0, n.createElementVNode)(
                      "p",
                      s,
                      (0, n.toDisplayString)(t.$t("crash.totalValuePlayers")),
                      1
                    ),
                    (0, n.createElementVNode)(
                      "span",
                      c,
                      (0, n.toDisplayString)(t.countAllPlayers),
                      1
                    ),
                  ]),
                  (0, n.createElementVNode)("div", u, [
                    (0, n.createElementVNode)(
                      "p",
                      l,
                      (0, n.toDisplayString)(t.$t("crash.totalValueBets")),
                      1
                    ),
                    (0, n.createElementVNode)(
                      "span",
                      p,
                      (0, n.toDisplayString)(
                        r.getAmountSum(t.betsAmount) + " " + t.computedCurrency
                      ),
                      1
                    ),
                  ]),
                  (0, n.createElementVNode)("div", f, [
                    (0, n.createElementVNode)(
                      "p",
                      h,
                      (0, n.toDisplayString)(t.$t("crash.totalWin")),
                      1
                    ),
                    (0, n.createElementVNode)(
                      "span",
                      d,
                      (0, n.toDisplayString)(
                        r.getAmountSum(t.totalGain) + " " + t.computedCurrency
                      ),
                      1
                    ),
                  ]),
                ]),
                (0, n.createElementVNode)("div", m, [
                  (0, n.createElementVNode)(
                    "div",
                    {
                      class: (0, n.normalizeClass)([
                        { scrollbar: O.notAllPlayersAreVisible },
                        "crash-results-table crash-results__table",
                      ]),
                    },
                    [
                      (0, n.createElementVNode)("div", v, [
                        (0, n.createElementVNode)(
                          "p",
                          b,
                          (0, n.toDisplayString)(t.$t("crash.resultsLogin")),
                          1
                        ),
                        (0, n.createElementVNode)(
                          "p",
                          y,
                          (0, n.toDisplayString)(t.$t("common.coef")),
                          1
                        ),
                        (0, n.createElementVNode)(
                          "p",
                          g,
                          (0, n.toDisplayString)(t.$t("common.bet")),
                          1
                        ),
                        (0, n.createElementVNode)(
                          "p",
                          _,
                          (0, n.toDisplayString)(t.$t("crash.resultsPrize")),
                          1
                        ),
                      ]),
                      ((0, n.openBlock)(!0),
                      (0, n.createElementBlock)(
                        n.Fragment,
                        null,
                        (0, n.renderList)(t.players, function (e) {
                          return (
                            (0, n.openBlock)(),
                            (0, n.createElementBlock)(
                              "div",
                              {
                                key: e.id,
                                class: (0, n.normalizeClass)([
                                  O.getRowClasses(e),
                                  "crash-results-table__row",
                                ]),
                              },
                              [
                                (0, n.createElementVNode)(
                                  "p",
                                  S,
                                  (0, n.toDisplayString)(e.userId),
                                  1
                                ),
                                (0, n.createElementVNode)(
                                  "p",
                                  w,
                                  " x" + (0, n.toDisplayString)(e.coefficient),
                                  1
                                ),
                                (0, n.createElementVNode)(
                                  "p",
                                  A,
                                  (0, n.toDisplayString)(
                                    r.getAmountSum(e.betAmount) +
                                      " " +
                                      t.computedCurrency
                                  ),
                                  1
                                ),
                                (0, n.createElementVNode)(
                                  "p",
                                  E,
                                  (0, n.toDisplayString)(
                                    r.getAmountSum(e.winningAmount) +
                                      " " +
                                      t.computedCurrency
                                  ),
                                  1
                                ),
                              ],
                              2
                            )
                          );
                        }),
                        128
                      )),
                    ],
                    2
                  ),
                ]),
              ])
            );
          },
        ],
      ]);
    },
    2646787: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => xn });
      var n = r(27335873),
        o = ["data-theme"],
        i = { class: "crash__container" },
        a = { class: "crash__wrap crash__wrap--main" },
        s = { class: "crash__game crash-game" },
        c = { class: "crash-game__timeline" },
        u = {
          class: "crash-game__svg",
          height: "420",
          viewBox: "0 0 1230 420",
          width: "1230",
        },
        l = { "clip-path": "url(#a)" },
        p = ["d"],
        f = ["d"],
        h = ["cx", "cy"],
        d = {
          class: "crash-game__counter",
          "font-size": "83",
          x: "1160",
          y: "356",
        },
        m = { class: "crash-game__axis" },
        v = ["d"],
        b = ["transform"],
        y = ["transform"],
        g = { class: "crash-game__text" },
        _ = { class: "crash-game__wrap" },
        S = { class: "crash-timer__counter" },
        w = { class: "crash-timer__segment" },
        A = {
          key: 0,
          class: "crash-game__notification crash-game-notification",
        },
        E = { class: "crash-game-notification__text" },
        B = { class: "crash-btn__text" },
        x = { class: "crash__wrap crash__wrap--bottom" },
        O = { key: 0, class: "crash-bet__error crash-bet-error" },
        k = ["aria-label", "title"],
        I = { class: "crash-bet-error__text" },
        C = { class: "crash-bet crash__bet" },
        N = { class: "crash-bet-info__text" },
        P = { class: "crash-bet-info__text" };
      r(29204099),
        r(53375191),
        r(73503923),
        r(35669252),
        r(44381336),
        r(95723650),
        r(54660056),
        r(5320247),
        r(62951728),
        r(48158254),
        r(97200626),
        r(6137992),
        r(50473502),
        r(17522308),
        r(44422217),
        r(4421388),
        r(95440747),
        r(20037566),
        r(69994507),
        r(53083784),
        r(1906035),
        r(18515682),
        r(4145753),
        r(51524099),
        r(32570708),
        r(10827376),
        r(83722648),
        r(21313645),
        r(13223918),
        r(34318408),
        r(58074670),
        r(49684748),
        r(74018857);
      var T = r(3713828),
        j = r(43714350),
        D = r.n(j),
        V = r(24559251),
        G = r.n(V),
        R = r(25000323),
        F = r(98520875),
        M = r(6757310),
        L = r(47438373),
        W = r(68124156),
        $ = r(1039594),
        U = ["aria-label", "title"],
        z = { class: "crash-popup__title" },
        q = { class: "crash-popup__body" },
        H = { class: "crash-popup__wrap" },
        Y = { class: "crash-popup-field crash-popup__field" },
        X = ["title"],
        K = ["value", "placeholder"],
        Q = ["aria-label", "title"],
        Z = { class: "crash-popup-field crash-popup__field" },
        J = ["title"],
        tt = ["value", "placeholder"],
        et = ["aria-label", "title"],
        rt = { class: "crash-popup-field crash-popup__field" },
        nt = ["title"],
        ot = ["value", "placeholder"],
        it = ["title", "aria-label"],
        at = { class: "crash-popup__wrap" },
        st = {
          class:
            "crash-popup-field crash-popup__field crash-popup__field--radio",
        },
        ct = { class: "crash-popup-field__text crash-popup-field__text--win" },
        ut = { class: "crash-popup-field__group" },
        lt = ["id", "value"],
        pt = ["for"],
        ft = {
          class:
            "crash-popup-field crash-popup__field crash-popup__field--radio",
        },
        ht = { class: "crash-popup-field__text crash-popup-field__text--loss" },
        dt = { class: "crash-popup-field__group" },
        mt = ["id", "value"],
        vt = ["for"],
        bt = { class: "crash-popup-btn__text" },
        yt = { key: 0, class: "crash-popup-error" },
        gt = { class: "crash-popup-error__text" };
      var _t = r(3505111);
      r(47138695), r(57886333), r(27015936);
      function St(t) {
        return (
          (St =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          St(t)
        );
      }
      function wt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function At(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? wt(Object(r), !0).forEach(function (e) {
                Et(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : wt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Et(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != St(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != St(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == St(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const Bt = {
        props: {
          prepareSumFunc: { type: Function, required: !0 },
          betIndex: { type: Number, default: 0 },
        },
        emits: ["input", "focus", "blur"],
        data: function () {
          return {
            isFocused: {
              baseAutoBetGet: !1,
              limitAutoBetGet: !1,
              cashoutAutoBetGet: !1,
            },
            autoBetInWinOptions: [
              { id: "radio-win-base", value: !1, text: "crash.betBackBase" },
              {
                id: "radio-win-doubling",
                value: !0,
                text: "crash.betDoubling",
              },
            ],
            autoBetOnLossOptions: [
              { id: "radio-loss-base", value: !1, text: "crash.betBackBase" },
              {
                id: "radio-loss-doubling",
                value: !0,
                text: "crash.betDoubling",
              },
            ],
            localValueAutoGame: "",
            isInputPointerDown: !1,
          };
        },
        computed: At(
          At(
            At({}, (0, T.mapGetters)("crash/bets", ["betsData"])),
            (0, T.mapGetters)("game", ["maxBet", "minBet", "recommendedBetSum"])
          ),
          {},
          {
            currentBetData: function () {
              return this.betsData[this.betIndex];
            },
            baseAutoBetGet: {
              get: function () {
                return (
                  (this.isFocused.baseAutoBetGet
                    ? this.localValueAutoGame
                    : this.currentBetData.baseAutoBet) || ""
                );
              },
              set: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e = this.filterValueAutoGame(t);
                this.setBaseAutoBet({
                  value: this.prepareSumFunc(e),
                  betIndex: this.betIndex,
                });
              },
            },
            limitAutoBetGet: {
              get: function () {
                return (
                  (this.isFocused.limitAutoBetGet
                    ? this.localValueAutoGame
                    : this.currentBetData.limitAutoBet) || ""
                );
              },
              set: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e = this.filterValueAutoGame(t);
                this.setLimitAutoBet({
                  value: this.prepareSumFunc(e),
                  betIndex: this.betIndex,
                });
              },
            },
            cashoutAutoBetGet: {
              get: function () {
                return (
                  (this.isFocused.cashoutAutoBetGet
                    ? this.localValueAutoGame
                    : this.currentBetData.cashoutAutoBet) || ""
                );
              },
              set: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  e = this.filterValueAutoGame(t);
                this.setCashoutAutoBet({
                  value: this.prepareSumFunc(e),
                  betIndex: this.betIndex,
                });
              },
            },
            selectedAutoBetInWinOptionGet: {
              get: function () {
                return this.currentBetData.selectedAutoBetInWinOption;
              },
              set: function () {
                var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                this.setSelectedAutoBetInWinOption({
                  value: t,
                  betIndex: this.betIndex,
                });
              },
            },
            selectedAutoBetOnLossOptionGet: {
              get: function () {
                return this.currentBetData.selectedAutoBetOnLossOption;
              },
              set: function () {
                var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                this.setSelectedAutoBetOnLossOption({
                  value: t,
                  betIndex: this.betIndex,
                });
              },
            },
            inputListeners: function () {
              var t = this;
              return {
                input: this.autoBetGetInputHandler,
                change: function (e) {
                  return t.$emit("change", e.target.value);
                },
                focus: function (e) {
                  return t.onFocus(e);
                },
                blur: function (e) {
                  return t.onBlur(e);
                },
                pointerdown: function () {
                  return t.onPointerDown();
                },
              };
            },
          }
        ),
        watch: {
          recommendedBetSum: function () {
            this.baseAutoBetGet ||
              (this.baseAutoBetGet = this.recommendedBetSum);
          },
        },
        mounted: function () {
          this.baseAutoBetGet || (this.baseAutoBetGet = this.recommendedBetSum);
        },
        methods: At(
          At(
            {},
            (0, T.mapMutations)("crash/bets", [
              "setBaseAutoBet",
              "setLimitAutoBet",
              "setCashoutAutoBet",
              "setSelectedAutoBetInWinOption",
              "setSelectedAutoBetOnLossOption",
            ])
          ),
          {},
          {
            autoBetGetInputHandler: function (t) {
              var e = t.target.value
                .toString()
                .replace(/\s+/g, "")
                .replace(",", ".")
                .replace(/[^.\d]+/g, "")
                .replace(/^0+/, "0")
                .replace(/^([^.]*\.)|\./g, "$1")
                .replace(/^\./, "");
              (t.target.value = e),
                (this.localValueAutoGame = e),
                this.$emit("input", e);
            },
            filterValueAutoGame: function (t) {
              var e = (t = t.toString()).length - 1;
              return [",", "."].includes(t[e]) && (t = t.substring(0, e)), t;
            },
            onFocus: function (t) {
              (this.localValueAutoGame = this[t.target.name]),
                (this.isFocused[t.target.name] = !0),
                this.$emit("focus");
            },
            onBlur: function (t) {
              (this[t.target.name] = this.localValueAutoGame),
                (this.isFocused[t.target.name] = !1),
                (this.localValueAutoGame = 0),
                this.$emit("blur");
            },
            onPointerDown: function () {
              var t = this;
              this.isInputPointerDown = !0;
              var e = function () {
                window.removeEventListener("pointerup", e),
                  setTimeout(function () {
                    t.isInputPointerDown = !1;
                  }, 100);
              };
              window.addEventListener("pointerup", e);
            },
            clearBaseAutoBet: function () {
              this.baseAutoBetGet = 0;
            },
            clearLimitAutoBet: function () {
              this.limitAutoBetGet = 0;
            },
            clearCashoutAutoBet: function () {
              this.cashoutAutoBetGet = 0;
            },
          }
        ),
      };
      function xt(t) {
        return (
          (xt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          xt(t)
        );
      }
      function Ot(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function kt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ot(Object(r), !0).forEach(function (e) {
                It(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Ot(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function It(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != xt(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != xt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == xt(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const Ct = {
        name: "AutoGamePopup",
        components: { AdaptiveContainer: M.yx },
        mixins: [Bt, _t.PopupMixin],
        props: {
          showErrorInfo: { type: Boolean, required: !0 },
          errorInfo: { type: String, required: !0 },
        },
        emits: ["close", "start-game"],
        computed: kt(
          kt(
            {},
            (0, T.mapGetters)("application", ["isMobileView", "isDesktopView"])
          ),
          (0, T.mapGetters)("betsButtons", ["getCurrBet"])
        ),
        methods: kt(
          kt({}, (0, T.mapMutations)("betsButtons", ["setSumBet"])),
          {},
          {
            onOverlayClick: function () {
              this.isInputPointerDown || this.close();
            },
            close: function () {
              this.setSumBet({
                id: this.betIndex,
                value: this.currentBetData.baseAutoBet,
              }),
                this.$emit("close");
            },
            clickStart: function () {
              this.setSumBet({
                id: this.betIndex,
                value: this.currentBetData.baseAutoBet,
              }),
                this.$emit("start-game", this.betIndex);
            },
          }
        ),
      };
      var Nt = r(58896881);
      const Pt = (0, Nt.A)(Ct, [
        [
          "render",
          function (t, e, r, o, i, a) {
            var s = (0, n.resolveComponent)("AdaptiveContainer");
            return (
              (0, n.openBlock)(),
              (0, n.createElementBlock)(
                "div",
                {
                  ref: "popup",
                  onClick:
                    e[7] ||
                    (e[7] = (0, n.withModifiers)(
                      function () {
                        return (
                          a.onOverlayClick &&
                          a.onOverlayClick.apply(a, arguments)
                        );
                      },
                      ["self"]
                    )),
                  style: (0, n.normalizeStyle)(t.popupStyles),
                  class: "crash-overlay",
                },
                [
                  (0, n.createVNode)(
                    s,
                    {
                      parentSee: "",
                      ratioMap: {
                        desktop: {
                          "0.0": {
                            0: {
                              sourceArea: { width: 1920, height: 850 },
                              targetArea: { x: 0, y: 0, width: 1, height: 1 },
                            },
                          },
                        },
                      },
                      class: (0, n.normalizeClass)({
                        "adaptive-modal": t.isDesktopView,
                      }),
                    },
                    {
                      default: (0, n.withCtx)(function () {
                        return [
                          (0, n.createElementVNode)(
                            "div",
                            {
                              class: (0, n.normalizeClass)([
                                { "game-popup--mobile-v3": t.isMobileView },
                                "crash-popup crash-popup--autogame",
                              ]),
                            },
                            [
                              (0, n.createElementVNode)(
                                "button",
                                {
                                  onClick:
                                    e[0] ||
                                    (e[0] = function () {
                                      return (
                                        a.close && a.close.apply(a, arguments)
                                      );
                                    }),
                                  "aria-label": t.$t("common.close"),
                                  title: t.$t("common.close"),
                                  class: "crash-popup__close",
                                },
                                null,
                                8,
                                U
                              ),
                              (0, n.createElementVNode)(
                                "h2",
                                z,
                                (0, n.toDisplayString)(
                                  t.$t("common.autoGames")
                                ),
                                1
                              ),
                              (0, n.createElementVNode)("div", q, [
                                (0, n.createElementVNode)("div", H, [
                                  (0, n.createElementVNode)("div", Y, [
                                    (0, n.createElementVNode)(
                                      "label",
                                      {
                                        title: t.$t("crash.betBase"),
                                        class: "crash-popup-field__label",
                                        for: "crash-bet-base",
                                      },
                                      (0, n.toDisplayString)(
                                        t.$t("crash.betBase")
                                      ),
                                      9,
                                      X
                                    ),
                                    (0, n.createElementVNode)(
                                      "input",
                                      (0, n.mergeProps)(
                                        { id: "crash-bet-base" },
                                        (0, n.toHandlers)(t.inputListeners, !0),
                                        {
                                          name: "baseAutoBetGet",
                                          value: t.baseAutoBetGet,
                                          placeholder: t.$t("crash.inputBet"),
                                          class: "crash-popup-field__input",
                                          autocomplete: "off",
                                          type: "text",
                                          inputmode: "decimal",
                                        }
                                      ),
                                      null,
                                      16,
                                      K
                                    ),
                                    (0, n.createElementVNode)(
                                      "button",
                                      {
                                        onClick:
                                          e[1] ||
                                          (e[1] = function () {
                                            return (
                                              t.clearBaseAutoBet &&
                                              t.clearBaseAutoBet.apply(
                                                t,
                                                arguments
                                              )
                                            );
                                          }),
                                        "aria-label": t.$t("common.clear"),
                                        title: t.$t("common.clear"),
                                        class: "crash-popup-field__clear",
                                      },
                                      null,
                                      8,
                                      Q
                                    ),
                                  ]),
                                  (0, n.createElementVNode)("div", Z, [
                                    (0, n.createElementVNode)(
                                      "label",
                                      {
                                        title: t.$t("crash.betLimit"),
                                        class: "crash-popup-field__label",
                                        for: "crash-bet-limit",
                                      },
                                      (0, n.toDisplayString)(
                                        t.$t("crash.betLimitShort")
                                      ),
                                      9,
                                      J
                                    ),
                                    (0, n.createElementVNode)(
                                      "input",
                                      (0, n.mergeProps)(
                                        { id: "crash-bet-limit" },
                                        (0, n.toHandlers)(t.inputListeners, !0),
                                        {
                                          name: "limitAutoBetGet",
                                          value: t.limitAutoBetGet,
                                          placeholder: t.$t("crash.inputBet"),
                                          class: "crash-popup-field__input",
                                          autocomplete: "off",
                                          type: "text",
                                          inputmode: "decimal",
                                        }
                                      ),
                                      null,
                                      16,
                                      tt
                                    ),
                                    (0, n.createElementVNode)(
                                      "button",
                                      {
                                        onClick:
                                          e[2] ||
                                          (e[2] = function () {
                                            return (
                                              t.clearLimitAutoBet &&
                                              t.clearLimitAutoBet.apply(
                                                t,
                                                arguments
                                              )
                                            );
                                          }),
                                        "aria-label": t.$t("common.clear"),
                                        title: t.$t("common.clear"),
                                        class: "crash-popup-field__clear",
                                      },
                                      null,
                                      8,
                                      et
                                    ),
                                  ]),
                                  (0, n.createElementVNode)("div", rt, [
                                    (0, n.createElementVNode)(
                                      "label",
                                      {
                                        title:
                                          t.$t("crash.betCashOut") +
                                          " (≥ 1.01)",
                                        class: "crash-popup-field__label",
                                        for: "crash-bet-cashout",
                                      },
                                      (0, n.toDisplayString)(
                                        t.$t("crash.betCashOut")
                                      ) + " (≥ 1.01) ",
                                      9,
                                      nt
                                    ),
                                    (0, n.createElementVNode)(
                                      "input",
                                      (0, n.mergeProps)(
                                        { id: "crash-bet-cashout" },
                                        (0, n.toHandlers)(t.inputListeners, !0),
                                        {
                                          name: "cashoutAutoBetGet",
                                          value: t.cashoutAutoBetGet,
                                          placeholder: t.$t("crash.inputCoef"),
                                          class: "crash-popup-field__input",
                                          autocomplete: "off",
                                          type: "text",
                                          inputmode: "decimal",
                                        }
                                      ),
                                      null,
                                      16,
                                      ot
                                    ),
                                    (0, n.createElementVNode)(
                                      "button",
                                      {
                                        onClick:
                                          e[3] ||
                                          (e[3] = function () {
                                            return (
                                              t.clearCashoutAutoBet &&
                                              t.clearCashoutAutoBet.apply(
                                                t,
                                                arguments
                                              )
                                            );
                                          }),
                                        title: t.$t("common.clear"),
                                        "aria-label": t.$t("common.clear"),
                                        class: "crash-popup-field__clear",
                                      },
                                      null,
                                      8,
                                      it
                                    ),
                                  ]),
                                ]),
                                (0, n.createElementVNode)("div", at, [
                                  (0, n.createElementVNode)("div", st, [
                                    (0, n.createElementVNode)(
                                      "p",
                                      ct,
                                      (0, n.toDisplayString)(
                                        t.$t("crash.betTextWin")
                                      ),
                                      1
                                    ),
                                    (0, n.createElementVNode)("ul", ut, [
                                      ((0, n.openBlock)(!0),
                                      (0, n.createElementBlock)(
                                        n.Fragment,
                                        null,
                                        (0, n.renderList)(
                                          t.autoBetInWinOptions,
                                          function (r) {
                                            return (
                                              (0, n.openBlock)(),
                                              (0, n.createElementBlock)(
                                                "li",
                                                {
                                                  key: r.id,
                                                  class:
                                                    "crash-popup-field__option",
                                                },
                                                [
                                                  (0, n.withDirectives)(
                                                    (0, n.createElementVNode)(
                                                      "input",
                                                      {
                                                        id: r.id,
                                                        "onUpdate:modelValue":
                                                          e[4] ||
                                                          (e[4] = function (e) {
                                                            return (t.selectedAutoBetInWinOptionGet =
                                                              e);
                                                          }),
                                                        value: r.value,
                                                        class:
                                                          "crash-popup-field__radio crash-popup-field__radio--win",
                                                        type: "radio",
                                                        name: "win",
                                                      },
                                                      null,
                                                      8,
                                                      lt
                                                    ),
                                                    [
                                                      [
                                                        n.vModelRadio,
                                                        t.selectedAutoBetInWinOptionGet,
                                                      ],
                                                    ]
                                                  ),
                                                  (0, n.createElementVNode)(
                                                    "label",
                                                    {
                                                      for: r.id,
                                                      class:
                                                        "crash-popup-field__label crash-popup-field__label--radio",
                                                    },
                                                    (0, n.toDisplayString)(
                                                      t.$t(r.text)
                                                    ),
                                                    9,
                                                    pt
                                                  ),
                                                ]
                                              )
                                            );
                                          }
                                        ),
                                        128
                                      )),
                                    ]),
                                  ]),
                                  (0, n.createElementVNode)("div", ft, [
                                    (0, n.createElementVNode)(
                                      "p",
                                      ht,
                                      (0, n.toDisplayString)(
                                        t.$t("crash.betTextLoss")
                                      ),
                                      1
                                    ),
                                    (0, n.createElementVNode)("ul", dt, [
                                      ((0, n.openBlock)(!0),
                                      (0, n.createElementBlock)(
                                        n.Fragment,
                                        null,
                                        (0, n.renderList)(
                                          t.autoBetOnLossOptions,
                                          function (r) {
                                            return (
                                              (0, n.openBlock)(),
                                              (0, n.createElementBlock)(
                                                "li",
                                                {
                                                  key: r.id,
                                                  class:
                                                    "crash-popup-field__option",
                                                },
                                                [
                                                  (0, n.withDirectives)(
                                                    (0, n.createElementVNode)(
                                                      "input",
                                                      {
                                                        id: r.id,
                                                        "onUpdate:modelValue":
                                                          e[5] ||
                                                          (e[5] = function (e) {
                                                            return (t.selectedAutoBetOnLossOptionGet =
                                                              e);
                                                          }),
                                                        value: r.value,
                                                        class:
                                                          "crash-popup-field__radio crash-popup-field__radio--loss",
                                                        type: "radio",
                                                        name: "loss",
                                                      },
                                                      null,
                                                      8,
                                                      mt
                                                    ),
                                                    [
                                                      [
                                                        n.vModelRadio,
                                                        t.selectedAutoBetOnLossOptionGet,
                                                      ],
                                                    ]
                                                  ),
                                                  (0, n.createElementVNode)(
                                                    "label",
                                                    {
                                                      for: r.id,
                                                      class:
                                                        "crash-popup-field__label crash-popup-field__label--radio",
                                                    },
                                                    (0, n.toDisplayString)(
                                                      t.$t(r.text)
                                                    ),
                                                    9,
                                                    vt
                                                  ),
                                                ]
                                              )
                                            );
                                          }
                                        ),
                                        128
                                      )),
                                    ]),
                                  ]),
                                ]),
                              ]),
                              (0, n.createElementVNode)(
                                "button",
                                {
                                  onClick:
                                    e[6] ||
                                    (e[6] = function () {
                                      return (
                                        a.clickStart &&
                                        a.clickStart.apply(a, arguments)
                                      );
                                    }),
                                  disabled: !1,
                                  class: "crash-popup-btn crash-popup__btn",
                                  type: "button",
                                },
                                [
                                  (0, n.createElementVNode)(
                                    "span",
                                    bt,
                                    (0, n.toDisplayString)(
                                      t.$t("crash.betsAuto")
                                    ),
                                    1
                                  ),
                                ]
                              ),
                              (0, n.createVNode)(
                                n.Transition,
                                { name: "games-fade" },
                                {
                                  default: (0, n.withCtx)(function () {
                                    return [
                                      r.showErrorInfo && r.errorInfo
                                        ? ((0, n.openBlock)(),
                                          (0, n.createElementBlock)("div", yt, [
                                            (0, n.createElementVNode)(
                                              "span",
                                              gt,
                                              (0, n.toDisplayString)(
                                                r.errorInfo
                                              ),
                                              1
                                            ),
                                          ]))
                                        : (0, n.createCommentVNode)("", !0),
                                    ];
                                  }),
                                  _: 1,
                                }
                              ),
                            ],
                            2
                          ),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["class"]
                  ),
                ],
                4
              )
            );
          },
        ],
      ]);
      var Tt = { class: "crash-bet__item" },
        jt = ["title", "disabled"],
        Dt = { class: "crash-bet-btn__text crash-bet-btn__text--autobet" },
        Vt = ["disabled"],
        Gt = {
          width: "70",
          height: "18",
          "aria-hidden": "true",
          class: "crash-bet-btn__icon",
        },
        Rt = { class: "crash-bet-btn__wrap" },
        Ft = { class: "crash-bet-btn__text crash-bet-btn__text--play" },
        Mt = { key: 0, class: "crash-bet-btn__text--next-round" };
      var Lt = { class: "crash-bet-control" },
        Wt = { class: "crash-bet-control__field" },
        $t = { class: "crash-bet-control__wrap" },
        Ut = ["onClick", "disabled"],
        zt = { class: "crash-bet-control__text" };
      var qt = ["title", "aria-label", "disabled"],
        Ht = {
          key: 0,
          width: "20",
          height: "20",
          viewBox: "0 0 68 68",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          class: "button-input-clear__ico",
        };
      function Yt(t) {
        return (
          (Yt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Yt(t)
        );
      }
      function Xt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Kt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Xt(Object(r), !0).forEach(function (e) {
                Qt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Xt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Qt(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != Yt(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != Yt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Yt(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const Zt = {
        name: "ButtonInputClear",
        props: {
          isDisabled: { type: Boolean, default: null },
          defaultIco: { type: Boolean, default: !1 },
          defaultStyles: { type: Boolean, default: !1 },
        },
        computed: Kt(
          Kt({}, (0, T.mapGetters)("betsButtons", ["blockedBetBtns"])),
          {},
          {
            isButtonDisabled: function () {
              return null === this.isDisabled
                ? this.blockedBetBtns
                : this.isDisabled;
            },
          }
        ),
        methods: {
          clearInput: function () {
            this.$emit("clearSumBet");
          },
        },
      };
      function Jt(t) {
        return (
          (Jt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Jt(t)
        );
      }
      function te(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ee(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? te(Object(r), !0).forEach(function (e) {
                re(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : te(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function re(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != Jt(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != Jt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Jt(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const ne = {
          components: {
            ButtonInputClear: (0, Nt.A)(Zt, [
              [
                "render",
                function (t, e, r, o, i, a) {
                  return (
                    (0, n.openBlock)(),
                    (0, n.createElementBlock)(
                      "button",
                      {
                        id: "button-input-clear",
                        onClick:
                          e[0] ||
                          (e[0] = function (t) {
                            return a.clearInput();
                          }),
                        title: t.$t("common.clear"),
                        "aria-label": t.$t("common.clear"),
                        disabled: a.isButtonDisabled,
                        class: (0, n.normalizeClass)([
                          {
                            "button-input-clear--theme-default":
                              r.defaultStyles,
                          },
                          "button-input-clear",
                        ]),
                        type: "reset",
                        ontouchstart: "",
                        "data-testid": "game-clear-bet-btn",
                      },
                      [
                        r.defaultIco
                          ? ((0, n.openBlock)(),
                            (0, n.createElementBlock)(
                              "svg",
                              Ht,
                              e[1] ||
                                (e[1] = [
                                  (0, n.createElementVNode)(
                                    "path",
                                    {
                                      fill: "#354146",
                                      d: "M3.2 2.6a9 9 0 0 0 0 12.6l18.4 18.5-19 19.1a9 9 0 0 0 0 12.6c3.4 3.5 9 3.5 12.4 0l19-19.2 19 19.2c3.4 3.5 9 3.5 12.4 0a9 9 0 0 0 0-12.6l-19-19.1 18.4-18.5a9 9 0 0 0 0-12.6 8.7 8.7 0 0 0-12.4 0L34 21.1 15.6 2.6a8.7 8.7 0 0 0-12.4 0Z",
                                    },
                                    null,
                                    -1
                                  ),
                                ])
                            ))
                          : (0, n.createCommentVNode)("", !0),
                        (0, n.renderSlot)(t.$slots, "default", {}, void 0, !0),
                      ],
                      10,
                      qt
                    )
                  );
                },
              ],
              ["__scopeId", "data-v-6e6ec4d2"],
            ]),
          },
          mixins: [R.BetButtonsMixin],
          props: {
            disabledMakeBet: { type: Boolean, required: !0 },
            hasActiveFreeBet: { type: Boolean, default: !1 },
          },
          computed: ee(
            ee({}, (0, T.mapGetters)("game", ["recommendedBetSum"])),
            {},
            {
              blocked: function () {
                return this.betBtnsIsBlocked || this.bonusFreeBetIsActive;
              },
            }
          ),
          mounted: function () {
            this.sumBet = this.recommendedBetSum || this.minBet;
          },
        },
        oe = (0, Nt.A)(ne, [
          [
            "render",
            function (t, e, r, o, i, a) {
              var s = (0, n.resolveComponent)("UiBetInput"),
                c = (0, n.resolveComponent)("ButtonInputClear");
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)("div", Lt, [
                  (0, n.createElementVNode)("div", Wt, [
                    r.hasActiveFreeBet
                      ? ((0, n.openBlock)(),
                        (0, n.createElementBlock)(
                          "div",
                          {
                            key: 1,
                            class: (0, n.normalizeClass)([
                              {
                                "crash-bet-control__input--is-disabled":
                                  a.blocked || r.disabledMakeBet,
                              },
                              "crash-bet-control__input",
                            ]),
                          },
                          " FREEBET ",
                          2
                        ))
                      : ((0, n.openBlock)(),
                        (0, n.createBlock)(
                          s,
                          {
                            key: 0,
                            disabled: a.blocked || r.disabledMakeBet,
                            class: "crash-bet-control__input",
                          },
                          null,
                          8,
                          ["disabled"]
                        )),
                    r.hasActiveFreeBet
                      ? (0, n.createCommentVNode)("", !0)
                      : ((0, n.openBlock)(),
                        (0, n.createBlock)(
                          c,
                          {
                            key: 2,
                            onClearSumBet:
                              e[0] ||
                              (e[0] = function (e) {
                                return t.clearSumBet();
                              }),
                            isDisabled: a.blocked || r.disabledMakeBet,
                            class: "crash-bet-control__clear",
                          },
                          null,
                          8,
                          ["isDisabled"]
                        )),
                  ]),
                  (0, n.createElementVNode)("div", $t, [
                    ((0, n.openBlock)(!0),
                    (0, n.createElementBlock)(
                      n.Fragment,
                      null,
                      (0, n.renderList)(t.bets, function (e) {
                        return (
                          (0, n.openBlock)(),
                          (0, n.createElementBlock)(
                            "button",
                            {
                              onClick: function (r) {
                                return t.clickBet(e);
                              },
                              class: (0, n.normalizeClass)([
                                t.blockedClass,
                                "crash-bet-control__btn",
                              ]),
                              disabled: a.blocked || r.disabledMakeBet,
                              type: "button",
                            },
                            [
                              (0, n.createElementVNode)(
                                "span",
                                zt,
                                (0, n.toDisplayString)(e),
                                1
                              ),
                            ],
                            10,
                            Ut
                          )
                        );
                      }),
                      256
                    )),
                  ]),
                ])
              );
            },
          ],
        ]);
      var ie = r(12651039);
      function ae(t) {
        return (
          (ae =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ae(t)
        );
      }
      function se(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ce(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? se(Object(r), !0).forEach(function (e) {
                ue(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : se(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function ue(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != ae(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != ae(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == ae(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const le = {
          name: "BetField",
          components: { BetsButtons: oe },
          props: {
            disabledMakeBet: { type: Boolean, required: !0 },
            betIndex: { type: Number, required: !0 },
          },
          emits: [
            "take-win",
            "start-game",
            "open-auto-game-popup",
            "stop-auto-game",
          ],
          computed: ce(
            ce(
              ce(
                ce(
                  ce({}, (0, T.mapGetters)("application", ["isDesktopView"])),
                  (0, T.mapGetters)("bonuses", ["bonusFreeBetIsActive"])
                ),
                (0, T.mapGetters)("crash", ["stageStatusId"])
              ),
              (0, T.mapGetters)("crash/bets", [
                "betsData",
                "isMainBetActive",
                "isMainBetClosed",
                "isActiveBet",
                "showNextStageBet",
              ])
            ),
            {},
            {
              placeBetCaption: function () {
                return this.isActiveBet[this.betIndex]
                  ? this.$t("crash.betAccepted")
                  : this.$t("common.placeBet");
              },
              autoGameTitle: function () {
                if (this.isDesktopView) return this.autoGameBtnText;
              },
              autoGameBtnText: function () {
                return this.isAutoGameEnabled
                  ? this.$t("crash.autoBetOff")
                  : this.$t("crash.autoBetOn");
              },
              canTakeWin: function () {
                return (
                  this.stageStatusId === ie.w7.isStarted &&
                  this.isMainBetActive[this.betIndex] &&
                  !this.isMainBetClosed[this.betIndex]
                );
              },
              isWaitingActionResponse: function () {
                return this.betsData[this.betIndex].isWaitingActionResponse;
              },
              isAutoGameEnabled: function () {
                return this.betsData[this.betIndex].isAutoGameEnabled;
              },
              isAutoGameLastStageActive: function () {
                var t;
                return !(
                  null === (t = this.betsData[this.betIndex].mainBetData) ||
                  void 0 === t ||
                  !t.x
                );
              },
              isFreeBetActive: function () {
                return this.bonusFreeBetIsActive && 0 === this.betIndex;
              },
              isActionBtnDisabled: function () {
                return (
                  (this.disabledMakeBet && !this.canTakeWin) ||
                  (this.bonusFreeBetIsActive && 1 === this.betIndex)
                );
              },
            }
          ),
          methods: {
            clickActionButton: function () {
              this.canTakeWin
                ? this.$emit("take-win")
                : this.$emit("start-game");
            },
            clickAutoGameButton: function () {
              this.isAutoGameEnabled
                ? this.$emit("stop-auto-game")
                : this.$emit("open-auto-game-popup");
            },
          },
        },
        pe = (0, Nt.A)(le, [
          [
            "render",
            function (t, e, r, o, i, a) {
              var s = (0, n.resolveComponent)("BetsButtons");
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)("div", Tt, [
                  (0, n.createVNode)(
                    s,
                    {
                      disabledMakeBet: r.disabledMakeBet || a.isFreeBetActive,
                      hasActiveFreeBet: a.isFreeBetActive,
                      class: "crash-bet__control",
                    },
                    null,
                    8,
                    ["disabledMakeBet", "hasActiveFreeBet"]
                  ),
                  (0, n.createElementVNode)(
                    "button",
                    {
                      onClick:
                        e[0] ||
                        (e[0] = function () {
                          return (
                            a.clickAutoGameButton &&
                            a.clickAutoGameButton.apply(a, arguments)
                          );
                        }),
                      class: (0, n.normalizeClass)([
                        {
                          "crash-bet-btn--is-autobet-enabled":
                            a.isAutoGameEnabled,
                          "crash-bet-btn--is-autobet-disabled":
                            !a.isAutoGameEnabled || t.bonusFreeBetIsActive,
                        },
                        "crash-bet-btn crash-bet-btn--autobet crash-bet__btn",
                      ]),
                      title: a.autoGameTitle,
                      disabled: t.bonusFreeBetIsActive,
                      type: "button",
                    },
                    [
                      (0, n.createElementVNode)(
                        "span",
                        Dt,
                        (0, n.toDisplayString)(a.autoGameBtnText),
                        1
                      ),
                    ],
                    10,
                    jt
                  ),
                  (0, n.createElementVNode)(
                    "button",
                    {
                      onClick:
                        e[1] ||
                        (e[1] = function () {
                          return (
                            a.clickActionButton &&
                            a.clickActionButton.apply(a, arguments)
                          );
                        }),
                      disabled: a.isActionBtnDisabled,
                      class: (0, n.normalizeClass)([
                        {
                          "crash-bet-btn--is-loader": a.isWaitingActionResponse,
                          "crash-bet-btn--is-take": t.isActiveBet[r.betIndex],
                          "crash-bet-btn--is-make": !t.isActiveBet[r.betIndex],
                        },
                        "crash-bet-btn crash-bet-btn--play crash-bet__btn",
                      ]),
                      type: "button",
                    },
                    [
                      (0, n.withDirectives)(
                        ((0, n.openBlock)(),
                        (0, n.createElementBlock)(
                          "svg",
                          Gt,
                          e[2] ||
                            (e[2] = [
                              (0, n.createElementVNode)(
                                "use",
                                { "xlink:href": "#loader" },
                                null,
                                -1
                              ),
                            ]),
                          512
                        )),
                        [[n.vShow, a.isWaitingActionResponse]]
                      ),
                      (0, n.withDirectives)(
                        (0, n.createElementVNode)(
                          "span",
                          Rt,
                          [
                            (0, n.createElementVNode)(
                              "span",
                              Ft,
                              (0, n.toDisplayString)(
                                a.canTakeWin
                                  ? t.$t("common.take")
                                  : a.placeBetCaption
                              ),
                              1
                            ),
                            t.showNextStageBet[r.betIndex] && !a.canTakeWin
                              ? ((0, n.openBlock)(),
                                (0, n.createElementBlock)(
                                  "span",
                                  Mt,
                                  (0, n.toDisplayString)(
                                    t.$t("crash.nextStage")
                                  ),
                                  1
                                ))
                              : (0, n.createCommentVNode)("", !0),
                          ],
                          512
                        ),
                        [[n.vShow, !a.isWaitingActionResponse]]
                      ),
                    ],
                    10,
                    Vt
                  ),
                ])
              );
            },
          ],
        ]);
      var fe = { class: "crash-bet__types" },
        he = ["onClick", "disabled"],
        de = { class: "crash-bet__text" },
        me = { key: 0, class: "crash-bet__body" },
        ve = ["disabled"],
        be = {
          width: "70",
          height: "18",
          "aria-hidden": "true",
          class: "crash-btn__loader",
        },
        ye = { class: "crash-bet__wrap" },
        ge = { class: "crash-bet__text crash-bet__text--play" },
        _e = { key: 0, class: "crash-bet__text crash-bet__text--size-s" },
        Se = ["disabled"],
        we = {
          width: "70",
          height: "18",
          "aria-hidden": "true",
          class: "crash-btn__loader",
        },
        Ae = { key: 1, class: "crash-bet__body" },
        Ee = ["disabled"],
        Be = { class: "crash-bet__text crash-bet__text--play" },
        xe = {
          key: 0,
          width: "70",
          height: "18",
          "aria-hidden": "true",
          class: "crash-btn__loader",
        },
        Oe = { key: 1, class: "crash-bet__text crash-bet__text--play" };
      var ke = { class: "crash-bet-form" },
        Ie = { class: "crash-bet-form__wrap" },
        Ce = { class: "crash-bet-form__field" },
        Ne = ["title"],
        Pe = { class: "crash-bet-form__btns" },
        Te = ["onClick", "disabled"],
        je = { class: "crash-bet-form__text" },
        De = ["disabled", "title", "aria-label"];
      const Ve = { mixins: [R.BetButtonsMixin] },
        Ge = (0, Nt.A)(Ve, [
          [
            "render",
            function (t, e, r, o, i, a) {
              var s = (0, n.resolveComponent)("UiBetInput");
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)("div", ke, [
                  (0, n.createElementVNode)("div", Ie, [
                    (0, n.createElementVNode)("p", Ce, [
                      (0, n.createElementVNode)(
                        "label",
                        {
                          title: t.$t("common.bet"),
                          class:
                            "crash-bet-form__label crash-bet-form__label--size-s",
                          for: "bet-input",
                        },
                        (0, n.toDisplayString)(t.$t("common.bet")),
                        9,
                        Ne
                      ),
                      (0, n.createVNode)(s, { class: "crash-bet-form__input" }),
                    ]),
                  ]),
                  (0, n.createElementVNode)("div", Pe, [
                    ((0, n.openBlock)(!0),
                    (0, n.createElementBlock)(
                      n.Fragment,
                      null,
                      (0, n.renderList)(t.bets, function (e) {
                        return (
                          (0, n.openBlock)(),
                          (0, n.createElementBlock)(
                            "button",
                            {
                              onClick: function (r) {
                                return t.clickBet(e);
                              },
                              class: (0, n.normalizeClass)([
                                t.blockedClass,
                                "crash-btn crash-bet-form__btn crash-bet-form__btn--sum",
                              ]),
                              disabled: t.blockedBetBtns,
                              type: "button",
                              "data-testid": "game-quick-bet-btn",
                            },
                            [
                              (0, n.createElementVNode)(
                                "span",
                                je,
                                (0, n.toDisplayString)(e),
                                1
                              ),
                            ],
                            10,
                            Te
                          )
                        );
                      }),
                      256
                    )),
                    (0, n.createElementVNode)(
                      "button",
                      {
                        onClick:
                          e[0] ||
                          (e[0] = function (e) {
                            return t.clearSumBet();
                          }),
                        class: (0, n.normalizeClass)([
                          t.blockedClass,
                          "crash-btn crash-bet-form__btn crash-bet-form__btn--reset",
                        ]),
                        disabled: t.blockedBetBtns,
                        title: t.$t("common.clear"),
                        "aria-label": t.$t("common.clear"),
                        type: "reset",
                        "data-testid": "game-clear-bet-btn",
                      },
                      null,
                      10,
                      De
                    ),
                  ]),
                ])
              );
            },
          ],
        ]);
      var Re = { class: "crash-bet-form" },
        Fe = { class: "crash-bet-form__wrap crash-bet-form__wrap--autogame" },
        Me = { class: "crash-bet-form__field crash-bet-form__field--size-s" },
        Le = ["title"],
        We = ["disabled", "placeholder"],
        $e = { class: "crash-bet-form__field crash-bet-form__field--size-s" },
        Ue = ["title"],
        ze = ["disabled", "placeholder"],
        qe = { class: "crash-bet-form__field crash-bet-form__field--size-s" },
        He = ["title"],
        Ye = ["value", "disabled", "placeholder"],
        Xe = { class: "crash-bet-form__wrap crash-bet-form__wrap--autogame" },
        Ke = { class: "crash-bet-form__field" },
        Qe = {
          class: "crash-bet-form__text crash-bet-form__text--win crash-text",
        },
        Ze = { class: "crash-bet-form__group" },
        Je = ["id", "value"],
        tr = ["for"],
        er = { class: "crash-bet-form__field" },
        rr = {
          class: "crash-bet-form__text crash-bet-form__text--loss crash-text",
        },
        nr = { class: "crash-bet-form__group" },
        or = ["id", "value"],
        ir = ["for"];
      function ar(t) {
        return (
          (ar =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ar(t)
        );
      }
      function sr(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function cr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? sr(Object(r), !0).forEach(function (e) {
                ur(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sr(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function ur(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != ar(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != ar(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == ar(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const lr = {
        mixins: [Bt],
        computed: cr(
          cr(
            {},
            (0, T.mapGetters)("game", [
              "gameStarted",
              "gameAccountId",
              "enableAutogame",
            ])
          ),
          {},
          {
            disabledChangeSettings: function () {
              return !this.gameAccountId || this.gameStarted;
            },
          }
        ),
      };
      function pr(t) {
        return (
          (pr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          pr(t)
        );
      }
      function fr(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function hr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? fr(Object(r), !0).forEach(function (e) {
                dr(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : fr(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function dr(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != pr(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != pr(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == pr(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const mr = {
          name: "BetFieldOld",
          components: {
            BetsButtonsOld: Ge,
            CrashBetsButtonsAutoGameOld: (0, Nt.A)(lr, [
              [
                "render",
                function (t, e, r, o, i, a) {
                  return (
                    (0, n.openBlock)(),
                    (0, n.createElementBlock)("div", Re, [
                      (0, n.createElementVNode)("fieldset", Fe, [
                        (0, n.createElementVNode)("p", Me, [
                          (0, n.createElementVNode)(
                            "label",
                            {
                              title: t.$t("crash.betBase"),
                              class: "crash-bet-form__label",
                              for: "crash-bet-base",
                            },
                            (0, n.toDisplayString)(t.$t("crash.betBase")),
                            9,
                            Le
                          ),
                          (0, n.withDirectives)(
                            (0, n.createElementVNode)(
                              "input",
                              (0, n.mergeProps)(
                                {
                                  id: "crash-bet-base",
                                  "onUpdate:modelValue":
                                    e[0] ||
                                    (e[0] = function (e) {
                                      return (t.baseAutoBetGet = e);
                                    }),
                                },
                                (0, n.toHandlers)(t.inputListeners, !0),
                                {
                                  disabled: a.disabledChangeSettings,
                                  placeholder: t.$t("crash.inputBet"),
                                  name: "baseAutoBetGet",
                                  class: "crash-bet-form__input",
                                  type: "number",
                                  autocomplete: "off",
                                  inputmode: "decimal",
                                }
                              ),
                              null,
                              16,
                              We
                            ),
                            [[n.vModelText, t.baseAutoBetGet]]
                          ),
                        ]),
                        (0, n.createElementVNode)("p", $e, [
                          (0, n.createElementVNode)(
                            "label",
                            {
                              title: t.$t("crash.betLimit"),
                              class: "crash-bet-form__label",
                              for: "crash-bet-limit",
                            },
                            (0, n.toDisplayString)(t.$t("crash.betLimit")),
                            9,
                            Ue
                          ),
                          (0, n.withDirectives)(
                            (0, n.createElementVNode)(
                              "input",
                              (0, n.mergeProps)(
                                {
                                  id: "crash-bet-limit",
                                  "onUpdate:modelValue":
                                    e[1] ||
                                    (e[1] = function (e) {
                                      return (t.limitAutoBetGet = e);
                                    }),
                                },
                                (0, n.toHandlers)(t.inputListeners, !0),
                                {
                                  disabled: a.disabledChangeSettings,
                                  placeholder: t.$t("crash.inputBet"),
                                  name: "limitAutoBetGet",
                                  class: "crash-bet-form__input",
                                  type: "number",
                                  autocomplete: "off",
                                  inputmode: "decimal",
                                }
                              ),
                              null,
                              16,
                              ze
                            ),
                            [[n.vModelText, t.limitAutoBetGet]]
                          ),
                        ]),
                        (0, n.createElementVNode)("p", qe, [
                          (0, n.createElementVNode)(
                            "label",
                            {
                              class: "crash-bet-form__label",
                              for: "crash-bet-cashout",
                              title: t.$t("crash.betCashOut") + " (≥ 1.01)",
                            },
                            (0, n.toDisplayString)(t.$t("crash.betCashOut")) +
                              " (≥ 1.01) ",
                            9,
                            He
                          ),
                          (0, n.createElementVNode)(
                            "input",
                            (0, n.mergeProps)(
                              {
                                id: "crash-bet-cashout",
                                ref: "cashoutAutoBetGet",
                              },
                              (0, n.toHandlers)(t.inputListeners, !0),
                              {
                                value: t.cashoutAutoBetGet,
                                disabled: a.disabledChangeSettings,
                                placeholder: t.$t("crash.inputCoef"),
                                name: "cashoutAutoBetGet",
                                class: "crash-bet-form__input",
                                type: "text",
                                autocomplete: "off",
                                inputmode: "decimal",
                              }
                            ),
                            null,
                            16,
                            Ye
                          ),
                        ]),
                      ]),
                      (0, n.createElementVNode)("div", Xe, [
                        (0, n.createElementVNode)("fieldset", Ke, [
                          (0, n.createElementVNode)(
                            "legend",
                            Qe,
                            (0, n.toDisplayString)(t.$t("crash.betTextWin")),
                            1
                          ),
                          (0, n.createElementVNode)("ul", Ze, [
                            ((0, n.openBlock)(!0),
                            (0, n.createElementBlock)(
                              n.Fragment,
                              null,
                              (0, n.renderList)(
                                t.autoBetInWinOptions,
                                function (r) {
                                  return (
                                    (0, n.openBlock)(),
                                    (0, n.createElementBlock)(
                                      "li",
                                      {
                                        key: r.id,
                                        class: "crash-bet-form__option",
                                      },
                                      [
                                        (0, n.withDirectives)(
                                          (0, n.createElementVNode)(
                                            "input",
                                            {
                                              id: r.id,
                                              "onUpdate:modelValue":
                                                e[2] ||
                                                (e[2] = function (e) {
                                                  return (t.selectedAutoBetInWinOptionGet =
                                                    e);
                                                }),
                                              value: r.value,
                                              class:
                                                "crash-bet-form__radio crash-bet-form__radio--win",
                                              type: "radio",
                                              name: "win",
                                            },
                                            null,
                                            8,
                                            Je
                                          ),
                                          [
                                            [
                                              n.vModelRadio,
                                              t.selectedAutoBetInWinOptionGet,
                                            ],
                                          ]
                                        ),
                                        (0, n.createElementVNode)(
                                          "label",
                                          {
                                            for: r.id,
                                            class:
                                              "crash-bet-form__label crash-bet-form__label--radio",
                                          },
                                          (0, n.toDisplayString)(t.$t(r.text)),
                                          9,
                                          tr
                                        ),
                                      ]
                                    )
                                  );
                                }
                              ),
                              128
                            )),
                          ]),
                        ]),
                        (0, n.createElementVNode)("fieldset", er, [
                          (0, n.createElementVNode)(
                            "legend",
                            rr,
                            (0, n.toDisplayString)(t.$t("crash.betTextLoss")),
                            1
                          ),
                          (0, n.createElementVNode)("ul", nr, [
                            ((0, n.openBlock)(!0),
                            (0, n.createElementBlock)(
                              n.Fragment,
                              null,
                              (0, n.renderList)(
                                t.autoBetOnLossOptions,
                                function (r) {
                                  return (
                                    (0, n.openBlock)(),
                                    (0, n.createElementBlock)(
                                      "li",
                                      {
                                        key: r.id,
                                        class: "crash-bet-form__option",
                                      },
                                      [
                                        (0, n.withDirectives)(
                                          (0, n.createElementVNode)(
                                            "input",
                                            {
                                              id: r.id,
                                              "onUpdate:modelValue":
                                                e[3] ||
                                                (e[3] = function (e) {
                                                  return (t.selectedAutoBetOnLossOptionGet =
                                                    e);
                                                }),
                                              value: r.value,
                                              class:
                                                "crash-bet-form__radio crash-bet-form__radio--loss",
                                              type: "radio",
                                              name: "loss",
                                            },
                                            null,
                                            8,
                                            or
                                          ),
                                          [
                                            [
                                              n.vModelRadio,
                                              t.selectedAutoBetOnLossOptionGet,
                                            ],
                                          ]
                                        ),
                                        (0, n.createElementVNode)(
                                          "label",
                                          {
                                            for: r.id,
                                            class:
                                              "crash-bet-form__label crash-bet-form__label--radio",
                                          },
                                          (0, n.toDisplayString)(t.$t(r.text)),
                                          9,
                                          ir
                                        ),
                                      ]
                                    )
                                  );
                                }
                              ),
                              128
                            )),
                          ]),
                        ]),
                      ]),
                    ])
                  );
                },
              ],
            ]),
          },
          props: {
            prepareSumFunc: { type: Function, required: !0 },
            disabledMakeBet: { type: Boolean, required: !0 },
            disabledMakeMainBet: { type: Boolean, required: !0 },
            modelValue: { type: Boolean, required: !0 },
          },
          emits: [
            "take-win",
            "start-game",
            "start-auto-game",
            "stop-auto-game",
            "update:modelValue",
          ],
          data: function () {
            return {
              selectedBetType: ie.Kn.HANDS,
              betTabs: [
                { type: ie.Kn.HANDS, text: "crash.betHands" },
                { type: ie.Kn.AUTO, text: "common.autoBet" },
              ],
            };
          },
          computed: hr(
            hr(
              hr(
                hr(
                  hr(
                    hr(
                      {},
                      (0, T.mapGetters)("game", [
                        "gameStarted",
                        "gameAccountId",
                        "enableAutogame",
                      ])
                    ),
                    (0, T.mapGetters)("user", ["activeAccountId"])
                  ),
                  (0, T.mapGetters)("bonuses", ["bonusFreeBetIsActive"])
                ),
                (0, T.mapGetters)("crash", ["stageId", "stageStatusId"])
              ),
              (0, T.mapGetters)("crash/bets", [
                "betsData",
                "isActiveBet",
                "showNextStageBet",
                "isMainBetActive",
                "isMainBetClosed",
              ])
            ),
            {},
            {
              currentBet: function () {
                return this.betsData[0];
              },
              showNextStageBetText: function () {
                return this.showNextStageBet[0];
              },
              placeBetCaption: function () {
                return this.isActiveBet[0]
                  ? this.$t("crash.betAccepted")
                  : this.$t("common.placeBet");
              },
              isWaitingBetResponse: function () {
                return (
                  this.currentBet.isWaitingActionResponse &&
                  !this.isActiveBet[0]
                );
              },
              isWaitingCashoutResponse: function () {
                return (
                  this.currentBet.isWaitingActionResponse && this.isActiveBet[0]
                );
              },
              blockedBtnTakeWin: function () {
                return (
                  !this.isCanTakeWin ||
                  (this.currentBet.cashoutAutoBet > 1 && this.enableAutogame)
                );
              },
              isCanTakeWin: function () {
                return (
                  this.stageStatusId === ie.w7.isStarted &&
                  this.isMainBetActive[0] &&
                  !this.isMainBetClosed[0] &&
                  !this.isAutoGameLastStageActive
                );
              },
              isAutoGameLastStageActive: function () {
                return this.currentBet.mainBetData.x;
              },
              disabledSetSelectedBetType: function () {
                return (
                  !this.stageId ||
                  this.disabledMakeBetCurrencyAccount ||
                  this.stageStatusId === ie.w7.isEnded ||
                  this.gameStarted ||
                  !this.gameAccountId ||
                  this.bonusFreeBetIsActive
                );
              },
              disabledMakeBetCurrencyAccount: function () {
                return (
                  !(!this.gameAccountId || this.gameAccountId < 0) &&
                  this.gameAccountId !== this.activeAccountId
                );
              },
              disabledStartAutoGame: function () {
                return (
                  this.disabledMakeBet ||
                  this.gameStarted ||
                  this.disabledMakeMainBet ||
                  this.bonusFreeBetIsActive
                );
              },
              isAutoBetTypeSelected: function () {
                return this.selectedBetType === ie.Kn.AUTO;
              },
            }
          ),
          watch: {
            bonusFreeBetIsActive: function (t) {
              t && this.setSelectedBetType(ie.Kn.HANDS, !0);
            },
            isAutoBetTypeSelected: function (t) {
              this.$emit("update:modelValue", t);
            },
          },
          methods: {
            setSelectedBetType: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              (this.disabledSetSelectedBetType && !e) ||
                ((this.showErrorInfo = !1),
                (this.selectedBetType = t),
                t === ie.Kn.AUTO &&
                  this.calculatedSumBet < this.minBet &&
                  this.insertSingleBet(this.minBet),
                t === ie.Kn.HANDS &&
                  ((this.currentAutoBet = this.baseAutoBet),
                  this.stopAutoGame()));
            },
            onClickStartGame: function () {
              this.$emit("start-game");
            },
            takeWin: function () {
              this.$emit("take-win");
            },
            startAutoGame: function () {
              this.$emit("start-auto-game");
            },
            stopAutoGame: function () {
              this.$emit("stop-auto-game");
            },
          },
        },
        vr = (0, Nt.A)(mr, [
          [
            "render",
            function (t, e, r, o, i, a) {
              var s = (0, n.resolveComponent)("BetsButtonsOld"),
                c = (0, n.resolveComponent)("CrashBetsButtonsAutoGameOld");
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)(
                  n.Fragment,
                  null,
                  [
                    (0, n.createElementVNode)("div", fe, [
                      ((0, n.openBlock)(!0),
                      (0, n.createElementBlock)(
                        n.Fragment,
                        null,
                        (0, n.renderList)(i.betTabs, function (e) {
                          return (
                            (0, n.openBlock)(),
                            (0, n.createElementBlock)(
                              "button",
                              {
                                key: e.type,
                                onClick: function (t) {
                                  return a.setSelectedBetType(e.type);
                                },
                                class: (0, n.normalizeClass)([
                                  {
                                    "crash-bet__type--is-active":
                                      i.selectedBetType === e.type,
                                  },
                                  "crash-bet__type",
                                ]),
                                disabled: a.disabledSetSelectedBetType,
                              },
                              [
                                (0, n.createElementVNode)(
                                  "span",
                                  de,
                                  (0, n.toDisplayString)(t.$t(e.text)),
                                  1
                                ),
                              ],
                              10,
                              he
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                    a.isAutoBetTypeSelected
                      ? (0, n.createCommentVNode)("", !0)
                      : ((0, n.openBlock)(),
                        (0, n.createElementBlock)("form", me, [
                          (0, n.withDirectives)(
                            (0, n.createVNode)(
                              s,
                              { class: "crash-bet__form" },
                              null,
                              512
                            ),
                            [[n.vShow, !t.bonusFreeBetIsActive]]
                          ),
                          (0, n.createElementVNode)(
                            "button",
                            {
                              onClick:
                                e[0] ||
                                (e[0] = function () {
                                  return (
                                    a.onClickStartGame &&
                                    a.onClickStartGame.apply(a, arguments)
                                  );
                                }),
                              disabled: r.disabledMakeBet,
                              class: (0, n.normalizeClass)([
                                {
                                  "crash-btn--has-loader":
                                    a.isWaitingBetResponse,
                                },
                                "crash-btn crash-bet__btn crash-bet__btn--play",
                              ]),
                              type: "button",
                            },
                            [
                              (0, n.withDirectives)(
                                ((0, n.openBlock)(),
                                (0, n.createElementBlock)(
                                  "svg",
                                  be,
                                  e[4] ||
                                    (e[4] = [
                                      (0, n.createElementVNode)(
                                        "use",
                                        { "xlink:href": "#loader" },
                                        null,
                                        -1
                                      ),
                                    ]),
                                  512
                                )),
                                [[n.vShow, a.isWaitingBetResponse]]
                              ),
                              (0, n.withDirectives)(
                                (0, n.createElementVNode)(
                                  "span",
                                  ye,
                                  [
                                    (0, n.createElementVNode)(
                                      "span",
                                      ge,
                                      (0, n.toDisplayString)(a.placeBetCaption),
                                      1
                                    ),
                                    a.showNextStageBetText
                                      ? ((0, n.openBlock)(),
                                        (0, n.createElementBlock)(
                                          "span",
                                          _e,
                                          (0, n.toDisplayString)(
                                            t.$t("crash.nextStage")
                                          ),
                                          1
                                        ))
                                      : (0, n.createCommentVNode)("", !0),
                                  ],
                                  512
                                ),
                                [[n.vShow, !a.isWaitingBetResponse]]
                              ),
                            ],
                            10,
                            ve
                          ),
                          (0, n.createElementVNode)(
                            "button",
                            {
                              onClick:
                                e[1] ||
                                (e[1] = function () {
                                  return (
                                    a.takeWin && a.takeWin.apply(a, arguments)
                                  );
                                }),
                              disabled: a.blockedBtnTakeWin,
                              class: (0, n.normalizeClass)([
                                {
                                  "crash-btn--has-loader":
                                    a.isWaitingCashoutResponse,
                                },
                                "crash-btn crash-bet__btn crash-bet__btn--stop",
                              ]),
                              type: "button",
                            },
                            [
                              (0, n.withDirectives)(
                                ((0, n.openBlock)(),
                                (0, n.createElementBlock)(
                                  "svg",
                                  we,
                                  e[5] ||
                                    (e[5] = [
                                      (0, n.createElementVNode)(
                                        "use",
                                        { "xlink:href": "#loader" },
                                        null,
                                        -1
                                      ),
                                    ]),
                                  512
                                )),
                                [[n.vShow, a.isWaitingCashoutResponse]]
                              ),
                              (0, n.withDirectives)(
                                (0, n.createElementVNode)(
                                  "span",
                                  {
                                    class:
                                      "crash-bet__text crash-bet__text--stop",
                                  },
                                  (0, n.toDisplayString)(
                                    t.$t("common.takeWin")
                                  ),
                                  513
                                ),
                                [[n.vShow, !a.isWaitingCashoutResponse]]
                              ),
                            ],
                            10,
                            Se
                          ),
                        ])),
                    a.isAutoBetTypeSelected
                      ? ((0, n.openBlock)(),
                        (0, n.createElementBlock)("form", Ae, [
                          (0, n.createVNode)(
                            c,
                            {
                              prepareSumFunc: r.prepareSumFunc,
                              class: "crash-bet__form",
                            },
                            null,
                            8,
                            ["prepareSumFunc"]
                          ),
                          (0, n.withDirectives)(
                            (0, n.createElementVNode)(
                              "button",
                              {
                                onClick:
                                  e[2] ||
                                  (e[2] = function () {
                                    return (
                                      a.startAutoGame &&
                                      a.startAutoGame.apply(a, arguments)
                                    );
                                  }),
                                disabled: a.disabledStartAutoGame,
                                class:
                                  "crash-btn crash-bet__btn crash-bet__btn--play crash-bet__btn--size-l",
                                type: "button",
                              },
                              [
                                (0, n.createElementVNode)(
                                  "span",
                                  Be,
                                  (0, n.toDisplayString)(
                                    t.$t("crash.betsAuto")
                                  ),
                                  1
                                ),
                              ],
                              8,
                              Ee
                            ),
                            [[n.vShow, !t.enableAutogame]]
                          ),
                          (0, n.withDirectives)(
                            (0, n.createElementVNode)(
                              "button",
                              {
                                onClick:
                                  e[3] ||
                                  (e[3] = function () {
                                    return (
                                      a.stopAutoGame &&
                                      a.stopAutoGame.apply(a, arguments)
                                    );
                                  }),
                                class:
                                  "crash-btn crash-bet__btn crash-bet__btn--play crash-bet__btn--size-l",
                                type: "button",
                              },
                              [
                                a.isWaitingBetResponse
                                  ? ((0, n.openBlock)(),
                                    (0, n.createElementBlock)(
                                      "svg",
                                      xe,
                                      e[6] ||
                                        (e[6] = [
                                          (0, n.createElementVNode)(
                                            "use",
                                            { "xlink:href": "#loader" },
                                            null,
                                            -1
                                          ),
                                        ])
                                    ))
                                  : ((0, n.openBlock)(),
                                    (0, n.createElementBlock)(
                                      "span",
                                      Oe,
                                      (0, n.toDisplayString)(
                                        t.$t("crash.stopAuto")
                                      ),
                                      1
                                    )),
                              ],
                              512
                            ),
                            [[n.vShow, t.enableAutogame]]
                          ),
                        ]))
                      : (0, n.createCommentVNode)("", !0),
                  ],
                  64
                )
              );
            },
          ],
        ]);
      var br = { class: "crash-game-info" },
        yr = { key: 0, class: "crash-game-info__item" },
        gr = { class: "crash-game-info__text" },
        _r = { key: 0, class: "crash-game-info__text" },
        Sr = {
          key: 1,
          class: "crash-game-info__text crash-game-info__text--loss",
        };
      const wr = {
          name: "ResultNotification",
          props: {
            showBetAcceptedInfo: { type: Boolean, required: !0 },
            resultsQueue: { type: Array, required: !0 },
          },
        },
        Ar = (0, Nt.A)(wr, [
          [
            "render",
            function (t, e, r, o, i, a) {
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)("div", br, [
                  (0, n.createVNode)(
                    n.TransitionGroup,
                    { name: "games-fade" },
                    {
                      default: (0, n.withCtx)(function () {
                        return [
                          !r.resultsQueue.length && r.showBetAcceptedInfo
                            ? ((0, n.openBlock)(),
                              (0, n.createElementBlock)("div", yr, [
                                (0, n.createElementVNode)(
                                  "p",
                                  gr,
                                  (0, n.toDisplayString)(
                                    t.$t("common.betAccepted")
                                  ),
                                  1
                                ),
                              ]))
                            : (0, n.createCommentVNode)("", !0),
                          r.resultsQueue.length && !r.showBetAcceptedInfo
                            ? ((0, n.openBlock)(!0),
                              (0, n.createElementBlock)(
                                n.Fragment,
                                { key: 1 },
                                (0, n.renderList)(r.resultsQueue, function (e) {
                                  var r = e.resultMsg,
                                    o = e.showWin,
                                    i = e.showLose,
                                    a = e.betIndex;
                                  return (
                                    (0, n.openBlock)(),
                                    (0, n.createElementBlock)(
                                      "div",
                                      {
                                        key: a,
                                        class: "crash-game-info__item",
                                      },
                                      [
                                        o
                                          ? ((0, n.openBlock)(),
                                            (0, n.createElementBlock)(
                                              "p",
                                              _r,
                                              (0, n.toDisplayString)(r),
                                              1
                                            ))
                                          : i
                                          ? ((0, n.openBlock)(),
                                            (0, n.createElementBlock)(
                                              "p",
                                              Sr,
                                              (0, n.toDisplayString)(
                                                t.$t(
                                                  "common.badLuckExclamation"
                                                )
                                              ),
                                              1
                                            ))
                                          : (0, n.createCommentVNode)("", !0),
                                      ]
                                    )
                                  );
                                }),
                                128
                              ))
                            : (0, n.createCommentVNode)("", !0),
                        ];
                      }),
                      _: 1,
                    }
                  ),
                ])
              );
            },
          ],
        ]);
      r(95257620),
        r(68090010),
        r(97163518),
        r(47274729),
        r(71459841),
        r(96949634),
        r(92631386);
      var Er = r(13610023),
        Br = r.n(Er),
        xr = {
          mainBetData: null,
          nextStageBetData: null,
          isBetProcessed: !1,
          isWaitingActionResponse: !1,
          waitingActionResponsePromise: null,
          isAutoGameEnabled: !1,
          currentAutoBet: 0,
          baseAutoBet: 0,
          limitAutoBet: 0,
          cashoutAutoBet: 0,
          selectedAutoBetInWinOption: !1,
          selectedAutoBetOnLossOption: !1,
        };
      r(98920207);
      function Or(t) {
        return (
          (Or =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Or(t)
        );
      }
      function kr(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Ir(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? kr(Object(r), !0).forEach(function (e) {
                Cr(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : kr(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Cr(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != Or(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != Or(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Or(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function Nr(t) {
        return (
          (Nr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Nr(t)
        );
      }
      function Pr(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Tr(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return Tr(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? Tr(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Tr(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function jr(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Dr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? jr(Object(r), !0).forEach(function (e) {
                Vr(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : jr(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Vr(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != Nr(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != Nr(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Nr(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const Gr = {
        namespaced: !0,
        state: {
          stageId: null,
          nextStageId: null,
          stageStatusId: null,
          isNextStageBetFeatureActive: !1,
          isFewBetsFeatureActive: !1,
          players: [],
          countAllPlayers: 0,
          history: [],
          betsAmount: 0,
          totalGain: 0,
          isResultReceived: !1,
          gainCoef: null,
        },
        getters: {
          stageId: function (t) {
            return t.stageId;
          },
          nextStageId: function (t) {
            return t.nextStageId;
          },
          stageStatusId: function (t) {
            return t.stageStatusId;
          },
          isNextStageBetFeatureActive: function (t) {
            return t.isNextStageBetFeatureActive;
          },
          isFewBetsFeatureActive: function (t) {
            return t.isFewBetsFeatureActive;
          },
          countAllPlayers: function (t) {
            return t.countAllPlayers;
          },
          isResultReceived: function (t) {
            return t.isResultReceived;
          },
          players: function (t) {
            return t.players;
          },
          history: function (t) {
            return t.history;
          },
          betsAmount: function (t) {
            return t.betsAmount;
          },
          totalGain: function (t) {
            return t.totalGain;
          },
          gainCoef: function (t) {
            return t.gainCoef;
          },
        },
        mutations: {
          setStageId: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            t.stageId = e;
          },
          setNextStageId: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            t.nextStageId = e;
          },
          setStageStatusId: function (t, e) {
            t.stageStatusId = e;
          },
          setIsNextStageBetFeatureActive: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t.isNextStageBetFeatureActive = e;
          },
          setIsFewBetsFeatureActive: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            t.isFewBetsFeatureActive = 1 !== e;
          },
          setPlayers: function (t, e) {
            t.players = e;
          },
          setHistory: function (t, e) {
            t.history = e;
          },
          setBetsAmount: function (t, e) {
            t.betsAmount = e;
          },
          setTotalGain: function (t, e) {
            t.totalGain = e;
          },
          setCountAllPlayers: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            t.countAllPlayers = e;
          },
          setIsResultReceived: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t.isResultReceived = e;
          },
          setGainCoef: function (t, e) {
            t.gainCoef = e ? 1e3 * e : 25;
          },
        },
        actions: {
          setStageStatusId: function (t, e) {
            var r = t.commit;
            Object.values(ie.w7).includes(e) && r("setStageStatusId", e);
          },
          setPlayers: function (t, e) {
            var r = t.commit,
              n = t.state,
              o = new Map(),
              i = e.allUserAccounts.map(function (t) {
                return t.id.toString();
              });
            n.players.forEach(function (t) {
              return o.set(t.betId, t);
            }),
              e.players.forEach(function (t) {
                if (t.u && !o.has(t.id)) {
                  var e =
                    ((a = (n = t).id),
                    (s = void 0 === a ? 0 : a),
                    (c = n.u),
                    (u = void 0 === c ? "0" : c),
                    (l = n.bet),
                    (p = void 0 === l ? 0 : l),
                    (f = n.k),
                    (h = void 0 === f ? 0 : f),
                    (d = n.win),
                    (m = void 0 === d ? 0 : d),
                    (v = n.itsPlayersAccount),
                    {
                      betId: s,
                      userId: u,
                      betAmount: p,
                      coefficient: h,
                      winningAmount: m,
                      itsPlayersAccount: void 0 !== v && v,
                    });
                  i.includes(e.userId)
                    ? (e.itsPlayersAccount = !0)
                    : (e.userId = "*******".concat(e.userId)),
                    o.set(t.id, e);
                } else if (o.has(t.id)) {
                  var r = o.get(t.id);
                  o.set(
                    t.id,
                    Dr(
                      Dr({}, r),
                      {},
                      { coefficient: t.k || 0, winningAmount: t.win || 0 }
                    )
                  );
                }
                var n, a, s, c, u, l, p, f, h, d, m, v;
              }),
              r(
                "setPlayers",
                Array.from(o.values())
                  .sort(function (t, e) {
                    return e.betAmount - t.betAmount;
                  })
                  .sort(function (t, e) {
                    return e.itsPlayersAccount && t.itsPlayersAccount
                      ? e.betId - t.betId
                      : e.itsPlayersAccount - t.itsPlayersAccount;
                  })
                  .slice(0, ie.hG)
              );
          },
          clearPlayers: function (t) {
            (0, t.commit)("setPlayers", []);
          },
          setHistory: function (t, e) {
            var r = t.commit,
              n = t.state,
              o = e.history,
              i = void 0 === o ? [] : o,
              a = e.timezone,
              s = e.isNewHistoryItem,
              c = void 0 !== s && s,
              u = function (t) {
                var e = t.i,
                  r = void 0 === e ? 0 : e,
                  n = t.l,
                  o = t.bet,
                  i = t.win,
                  s = void 0 === i ? 0 : i,
                  c = t.k,
                  u = void 0 === c ? 0 : c,
                  l = t.f,
                  p = void 0 === l ? 0 : l,
                  f = t.t,
                  h = Br()(1e3 * f, a);
                return {
                  betIndex: r,
                  stageId: n,
                  date: h.date,
                  time: h.time,
                  crashCoefficient: p,
                  userCoefficient: u,
                  betAmount: o,
                  winningAmount: s,
                };
              },
              l = Pr(n.history);
            if (c) {
              var p = u(i[0]),
                f = l.findIndex(function (t) {
                  var e = t.stageId,
                    r = t.betIndex;
                  return e === p.stageId && r === p.betIndex;
                });
              -1 === f ? l.unshift(p) : (l[f] = p);
            } else l = i.map(u);
            r("setHistory", l);
          },
          setBetsAmount: function (t, e) {
            (0, t.commit)("setBetsAmount", e || 0);
          },
          setTotalGain: function (t, e) {
            (0, t.commit)("setTotalGain", e || 0);
          },
        },
        modules: {
          bets: {
            namespaced: !0,
            state: function () {
              return { betsData: [Ir({}, xr), Ir({}, xr)] };
            },
            getters: {
              betsData: function (t) {
                return t.betsData;
              },
              isNextStageBetActive: function (t, e, r, n) {
                var o = n["crash/nextStageId"];
                return t.betsData.map(function (t) {
                  var e = t.nextStageBetData;
                  return !(!o || (null == e ? void 0 : e.l) !== o);
                });
              },
              isBetForNextStageDisabled: function (t, e, r, n) {
                return e.isNextStageBetActive.map(function (t) {
                  return !n["crash/isNextStageBetFeatureActive"] || t;
                });
              },
              isMainBetActive: function (t, e, r, n) {
                var o = n["crash/stageId"];
                return t.betsData.map(function (t) {
                  var e = t.mainBetData,
                    r = t.nextStageBetData;
                  return !(
                    !o ||
                    (o !== (null == e ? void 0 : e.l) &&
                      o !== (null == r ? void 0 : r.l))
                  );
                });
              },
              isMainBetClosed: function (t, e, r, n) {
                return e.isMainBetActive.map(function (e, r) {
                  var o;
                  return !!(
                    n["crash/stageStatusId"] > ie.w7.isStarted ||
                    (n["crash/stageStatusId"] === ie.w7.isStarted &&
                      ((null !== (o = t.betsData[r].mainBetData) &&
                        void 0 !== o &&
                        o.k) ||
                        !e))
                  );
                });
              },
              isActiveBet: function (t, e) {
                return e.isMainBetActive.map(function (t, r) {
                  return !!(
                    (t && !e.isMainBetClosed[r]) ||
                    e.isNextStageBetActive[r]
                  );
                });
              },
              disabledMakeMainBetForStage: function (t, e, r, n) {
                return e.isMainBetActive.map(function (t) {
                  return null === n["crash/stageId"] || t;
                });
              },
              showNextStageBet: function (t, e, r, n) {
                return e.isNextStageBetActive.map(function (r, o) {
                  return !(
                    !n["crash/nextStageId"] ||
                    (t.betsData[o].isAutoGameEnabled &&
                      !e.isNextStageBetActive[o]) ||
                    !n["crash/isNextStageBetFeatureActive"] ||
                    (!r && !e.isMainBetClosed[o])
                  );
                });
              },
              isAnyBetProcessed: function (t) {
                return t.betsData.some(function (t) {
                  return t.isBetProcessed;
                });
              },
              isAnyBetActive: function (t, e) {
                return e.isActiveBet.some(function (t) {
                  return t;
                });
              },
              isAllAutoBetDisabled: function (t) {
                return t.betsData.every(function (t) {
                  return !t.isAutoGameEnabled;
                });
              },
            },
            mutations: {
              setMainBetData: function (t, e) {
                var r = e.value,
                  n = void 0 === r ? null : r,
                  o = e.betIndex;
                t.betsData[o].mainBetData = n;
              },
              setNextStageBetData: function (t, e) {
                var r = e.value,
                  n = void 0 === r ? null : r,
                  o = e.betIndex;
                t.betsData[o].nextStageBetData = n;
              },
              setIsBetProcessed: function (t, e) {
                var r = e.value,
                  n = void 0 !== r && r,
                  o = e.betIndex;
                t.betsData[o].isBetProcessed = n;
              },
              setIsWaitingActionResponse: function (t, e) {
                var r = e.value,
                  n = void 0 !== r && r,
                  o = e.betIndex;
                t.betsData[o].isWaitingActionResponse = n;
              },
              setWaitingActionResponsePromise: function (t, e) {
                var r = e.value,
                  n = void 0 === r ? null : r,
                  o = e.betIndex;
                t.betsData[o].waitingActionResponsePromise = n;
              },
              setIsAutoGameEnabled: function (t, e) {
                var r = e.value,
                  n = void 0 !== r && r,
                  o = e.betIndex;
                t.betsData[o].isAutoGameEnabled = n;
              },
              setCurrentAutoBet: function (t, e) {
                var r = e.value,
                  n = void 0 === r ? 0 : r,
                  o = e.betIndex;
                t.betsData[o].currentAutoBet = n;
              },
              setBaseAutoBet: function (t, e) {
                var r = e.value,
                  n = void 0 === r ? 0 : r,
                  o = e.betIndex;
                t.betsData[o].baseAutoBet = n;
              },
              setLimitAutoBet: function (t, e) {
                var r = e.value,
                  n = void 0 === r ? 0 : r,
                  o = e.betIndex;
                t.betsData[o].limitAutoBet = n;
              },
              setCashoutAutoBet: function (t, e) {
                var r = e.value,
                  n = void 0 === r ? 0 : r,
                  o = e.betIndex;
                t.betsData[o].cashoutAutoBet = n;
              },
              setSelectedAutoBetInWinOption: function (t, e) {
                var r = e.value,
                  n = void 0 !== r && r,
                  o = e.betIndex;
                t.betsData[o].selectedAutoBetInWinOption = n;
              },
              setSelectedAutoBetOnLossOption: function (t, e) {
                var r = e.value,
                  n = void 0 !== r && r,
                  o = e.betIndex;
                t.betsData[o].selectedAutoBetOnLossOption = n;
              },
            },
            actions: {
              enableIsBetProcessed: function (t, e) {
                (0, t.commit)("setIsBetProcessed", { value: !0, betIndex: e });
              },
              disableIsBetProcessed: function (t, e) {
                (0, t.commit)("setIsBetProcessed", { value: !1, betIndex: e });
              },
              enableIsWaitingActionResponse: function (t, e) {
                (0, t.commit)("setIsWaitingActionResponse", {
                  value: !0,
                  betIndex: e,
                });
              },
              disableIsWaitingActionResponse: function (t, e) {
                (0, t.commit)("setIsWaitingActionResponse", {
                  value: !1,
                  betIndex: e,
                });
              },
              resetCurrentAutoBet: function (t, e) {
                (0, t.commit)("setCurrentAutoBet", {
                  value: t.state.betsData[e].baseAutoBet,
                  betIndex: e,
                });
              },
              enableIsAutoGameEnabled: function (t, e) {
                (0, t.commit)("setIsAutoGameEnabled", {
                  value: !0,
                  betIndex: e,
                });
              },
              disableIsAutoGameEnabled: function (t, e) {
                (0, t.commit)("setIsAutoGameEnabled", {
                  value: !1,
                  betIndex: e,
                });
              },
              updateMainBetData: function (t, e) {
                var r = t.commit,
                  n = t.state,
                  o = e.value,
                  i = void 0 === o ? null : o,
                  a = e.betIndex;
                r("setMainBetData", {
                  value: Ir(Ir({}, n.betsData[a].mainBetData), i),
                  betIndex: a,
                });
              },
            },
          },
        },
      };
      r(57180314), r(27045624), r(76138123), r(41181582), r(60645153);
      var Rr = r(85483019),
        Fr = r(87558843),
        Mr = r.n(Fr),
        Lr = r(84253374),
        Wr = r(71860703),
        $r = (r(4835009), r(69616513), r(18228191)),
        Ur = r(63962875),
        zr = r.n(Ur),
        qr = r(63093559),
        Hr = r(80373427),
        Yr = r(80901300);
      function Xr(t) {
        return (
          (Xr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Xr(t)
        );
      }
      function Kr() {
        var t,
          e,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var c = n && n.prototype instanceof s ? n : s,
            u = Object.create(c.prototype);
          return (
            Qr(
              u,
              "_invoke",
              (function (r, n, o) {
                var i,
                  s,
                  c,
                  u = 0,
                  l = o || [],
                  p = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: h,
                    f: h.bind(t, 4),
                    d: function (e, r) {
                      return (i = e), (s = 0), (c = t), (f.n = r), a;
                    },
                  };
                function h(r, n) {
                  for (
                    s = r, c = n, e = 0;
                    !p && u && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      i = l[e],
                      h = f.p,
                      d = i[2];
                    r > 3
                      ? (o = d === n) &&
                        ((c = i[(s = i[4]) ? 5 : ((s = 3), 3)]),
                        (i[4] = i[5] = t))
                      : i[0] <= h &&
                        ((o = r < 2 && h < i[1])
                          ? ((s = 0), (f.v = n), (f.n = i[1]))
                          : h < d &&
                            (o = r < 3 || i[0] > n || n > d) &&
                            ((i[4] = r), (i[5] = n), (f.n = d), (s = 0)));
                  }
                  if (o || r > 1) return a;
                  throw ((p = !0), n);
                }
                return function (o, l, d) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === l && h(l, d), s = l, c = d;
                    (e = s < 2 ? t : c) || !p;

                  ) {
                    i ||
                      (s
                        ? s < 3
                          ? (s > 1 && (f.n = -1), h(s, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), i)) {
                        if ((s || (o = "next"), (e = i[o]))) {
                          if (!(e = e.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          (c = e.value), s < 2 && (s = 0);
                        } else
                          1 === s && (e = i.return) && e.call(i),
                            s < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method"
                              )),
                              (s = 1));
                        i = t;
                      } else if ((e = (p = f.n < 0) ? c : r.call(n, f)) !== a)
                        break;
                    } catch (e) {
                      (i = t), (s = 1), (c = e);
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: e, done: p };
                };
              })(r, o, i),
              !0
            ),
            u
          );
        }
        var a = {};
        function s() {}
        function c() {}
        function u() {}
        e = Object.getPrototypeOf;
        var l = [][n]
            ? e(e([][n]()))
            : (Qr((e = {}), n, function () {
                return this;
              }),
              e),
          p = (u.prototype = s.prototype = Object.create(l));
        function f(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, u)
              : ((t.__proto__ = u), Qr(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(p)),
            t
          );
        }
        return (
          (c.prototype = u),
          Qr(p, "constructor", u),
          Qr(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          Qr(u, o, "GeneratorFunction"),
          Qr(p),
          Qr(p, o, "Generator"),
          Qr(p, n, function () {
            return this;
          }),
          Qr(p, "toString", function () {
            return "[object Generator]";
          }),
          (Kr = function () {
            return { w: i, m: f };
          })()
        );
      }
      function Qr(t, e, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        (Qr = function (t, e, r, n) {
          function i(e, r) {
            Qr(t, e, function (t) {
              return this._invoke(e, r, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: r,
                  enumerable: !n,
                  configurable: !n,
                  writable: !n,
                })
              : (t[e] = r)
            : (i("next", 0), i("throw", 1), i("return", 2));
        }),
          Qr(t, e, r, n);
      }
      function Zr(t, e, r, n, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, o);
      }
      function Jr(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(e, r);
            function a(t) {
              Zr(i, n, o, a, s, "next", t);
            }
            function s(t) {
              Zr(i, n, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function tn(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function en(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tn(Object(r), !0).forEach(function (e) {
                rn(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tn(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function rn(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != Xr(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != Xr(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Xr(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const nn = {
        mixins: [qr.RedirectToErrorPage],
        data: function () {
          return {
            resetPingWaitingConnectionTimer: null,
            lastBetStageId: null,
            unwatchStageStatusId: null,
            isRegistration: !0,
            isFirstConnection: !0,
            reconnectCount: 0,
            nextStageBetAlert: { msg: "", isError: !1 },
            isAnalyticsSent: !1,
            onBetsBeforeOnStageQueue: [],
          };
        },
        computed: en(
          en(
            en(
              en({}, (0, T.mapGetters)("application", ["isMobileView"])),
              (0, T.mapGetters)("bonuses", ["bonusFreeBetIsActive"])
            ),
            (0, T.mapGetters)("crash", [
              "stageId",
              "nextStageId",
              "stageStatusId",
              "isNextStageBetFeatureActive",
            ])
          ),
          (0, T.mapGetters)("crash/bets", ["betsData", "isMainBetActive"])
        ),
        watch: {
          stageId: function () {
            this.clearPlayers();
          },
          isMainBetActive: {
            handler: function () {
              this.startNextStageBet();
            },
            deep: !0,
          },
        },
        mounted: function () {
          var t = this;
          return Jr(
            Kr().m(function e() {
              return Kr().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      t.unwatchStageStatusId = t.$store.watch(
                        function (t, e) {
                          return e["crash/stageStatusId"];
                        },
                        function (e) {
                          t.onPing(e);
                        }
                      );
                    case 1:
                      return e.a(2);
                  }
              }, e);
            })
          )();
        },
        beforeUnmount: function () {
          var t;
          null === (t = this.unwatchStageStatusId) ||
            void 0 === t ||
            t.call(this);
        },
        methods: en(
          en(
            en(
              en(
                en(
                  en(
                    en(
                      en(
                        en(
                          {},
                          (0, T.mapActions)("waitingConnection", [
                            "startWaitingConnection",
                          ])
                        ),
                        (0, T.mapActions)("crash", [
                          "setStageStatusId",
                          "setPlayers",
                          "setHistory",
                          "setBetsAmount",
                          "setTotalGain",
                          "clearPlayers",
                        ])
                      ),
                      (0, T.mapActions)("waitingConnection", [
                        "startWaitingConnection",
                      ])
                    ),
                    (0, T.mapMutations)("waitingConnection", [
                      "setIsWaitingConnectionShown",
                    ])
                  ),
                  (0, T.mapMutations)("crash", [
                    "setStageId",
                    "setNextStageId",
                    "setIsNextStageBetFeatureActive",
                    "setIsFewBetsFeatureActive",
                    "setCountAllPlayers",
                    "setIsResultReceived",
                    "setGainCoef",
                  ])
                ),
                (0, T.mapMutations)("crash/bets", [
                  "setCashoutAutoBet",
                  "setMainBetData",
                  "setNextStageBetData",
                ])
              ),
              (0, T.mapActions)("crash/bets", [
                "enableIsBetProcessed",
                "disableIsBetProcessed",
                "enableIsWaitingActionResponse",
                "disableIsWaitingActionResponse",
                "updateMainBetData",
              ])
            ),
            (0, T.mapActions)("project", ["loadActionsWorkStatus"])
          ),
          {},
          {
            onRegistration: function (t) {
              var e = this;
              return Jr(
                Kr().m(function r() {
                  var n, o, i, a, s, c;
                  return Kr().w(function (r) {
                    for (;;)
                      switch (r.n) {
                        case 0:
                          if (((a = Date.now()), e.setDelay(a), t.ok)) {
                            r.n = 5;
                            break;
                          }
                          return (r.n = 1), e.redirectForMaintenanceError(t.ec);
                        case 1:
                          if (t.ec === ie.vR) {
                            r.n = 3;
                            break;
                          }
                          return (
                            e.clearWaitingConnection(),
                            (r.n = 2),
                            e.stopConnection()
                          );
                        case 2:
                          return r.a(2);
                        case 3:
                          return (r.n = 4), e.checkToken(t);
                        case 4:
                          return r.a(2);
                        case 5:
                          return (
                            e.setGainCoef(t.kx),
                            (e.isRegistration = !0),
                            e.setStageId(t.l),
                            e.setNextStageId(t.ln),
                            e.setIsFewBetsFeatureActive(t.v.bx),
                            e.setIsNextStageBetFeatureActive(t.v.bu),
                            (e.isFirstConnection = !1),
                            e.setAllBetsData(t),
                            t.u &&
                              (e.setGameAccountId(t.u),
                              e.setGameAccountBalance(t.b)),
                            (null !== (n = t.bets) &&
                              void 0 !== n &&
                              n.length) ||
                              e.enableAutogame ||
                              (e.lastBetStageId = null),
                            (s =
                              null === (o = e.$route.query) || void 0 === o
                                ? void 0
                                : o.tzo),
                            (c = zr()(s)),
                            e.setHistory({ history: t.h, timezone: c }),
                            (r.n = 6),
                            e.onPing(t.s)
                          );
                        case 6:
                          e.setIsResultReceived(),
                            e.checkStage(t, a),
                            null === (i = t.bets) ||
                              void 0 === i ||
                              i.forEach(function (t) {
                                e.addUserBetToPlayersList(t);
                              }),
                            (e.isRegistration = !1);
                        case 7:
                          return r.a(2);
                      }
                  }, r);
                })
              )();
            },
            checkStage: function (t, e) {
              switch (t.s) {
                case ie.w7.isPlanned:
                case ie.w7.isWaiting:
                  var r;
                  this.onStageEvent(t),
                    (null !== (r = t.bets) && void 0 !== r && r.length) ||
                      this.enableAutogame ||
                      this.setGameStarted(!1);
                  break;
                case ie.w7.isAcceptingBets:
                  var n;
                  this.clearGame(),
                    this.onBetting(t),
                    this.onBetsEvent(t),
                    this.restoreAutoBetSettings(t),
                    (null !== (n = t.bets) && void 0 !== n && n.length) ||
                      this.enableAutogame ||
                      this.setGameStarted(!1),
                    this.runAutoGameByNewStageId();
                  break;
                case ie.w7.isStarted:
                  var o;
                  this.onStartEvent({ l: t.l }, e - t.t),
                    this.restoreAutoBetSettings(t),
                    this.onCashoutsEvent(t);
                  var i =
                    null === (o = t.bets) || void 0 === o
                      ? void 0
                      : o.find(function (t) {
                          return t.win;
                        });
                  i && this.setResultPopup(i.win, t.l, i.i);
                  break;
                case ie.w7.isEnded:
                case ie.w7.isClosed:
                  var a;
                  this.onCrashEvent({ l: t.l, f: t.p }),
                    this.setStageStatusId(ie.w7.isEnded);
                  var s = null === (a = t.h) || void 0 === a ? void 0 : a[0];
                  t.l === (null == s ? void 0 : s.l) &&
                    this.setResultPopup(s.win, s.l, s.i),
                    this.setIsResultReceived(!0);
              }
              this.setBetsAmount(t.bid),
                this.setCountAllPlayers(t.n),
                this.setTotalGain(t.won),
                this.connectionEstablished();
            },
            onStageEvent: function (t) {
              var e = this,
                r = t.l,
                n = t.ln;
              this.betsData.forEach(function (t, r) {
                e.disableIsBetProcessed(r), e.disableIsWaitingActionResponse(r);
              }),
                this.isStageIdCorrect({ l: r }) &&
                  this.isStageStatusIdCorrect({ l: r }, ie.w7.isWaiting) &&
                  (this.setStageId(r),
                  this.setNextStageId(n),
                  this.setBlockedActivity(!1),
                  this.clearGame(),
                  this.setStageStatusId(ie.w7.isWaiting),
                  this.restoreBetsAfterOnStage(),
                  this.connectionEstablished(),
                  this.runAutoGameByNewStageId());
            },
            onBetting: function (t) {
              var e = t.l,
                r = t.a,
                n = t.w,
                o = void 0 === n ? 0 : n;
              this.isStageIdCorrect({ l: e }) &&
                this.isStageStatusIdCorrect({ l: e }, ie.w7.isAcceptingBets) &&
                (this.setStageId(e),
                this.setStageStatusId(ie.w7.isAcceptingBets),
                this.setBlockedActivity(!1),
                this.restoreBetsAfterOnStage(),
                this.startNextStageBet(),
                this.runTimer(r, o),
                this.connectionEstablished());
            },
            onBetsEvent: function (t) {
              var e = t.l,
                r = t.bid,
                n = t.n,
                o = void 0 === n ? 0 : n,
                i = (t.d, t.q),
                a = void 0 === i ? [] : i;
              this.isStageIdCorrect({ l: e }) &&
                (e > this.stageId
                  ? this.onBetsBeforeOnStageQueue.push(t)
                  : (this.setStageId(e),
                    this.setBetsAmount(r),
                    this.setCountAllPlayers(o),
                    this.setPlayers({
                      players: a,
                      allUserAccounts: this.accounts,
                    })));
            },
            onStartEvent: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Date.now();
              this.isStageIdCorrect(t) &&
                this.isStageStatusIdCorrect(t, ie.w7.isStarted) &&
                (this.setStageId(t.l),
                this.stopTimer(),
                this.setDefaultGuideLines(),
                this.clearResult(),
                this.setStageStatusId(ie.w7.isStarted),
                this.setCoefChange(en(en({}, t), {}, { ts: e })),
                this.connectionEstablished());
            },
            onCashoutsEvent: function (t) {
              var e = t.l,
                r = t.won,
                n = t.n,
                o = void 0 === n ? 0 : n,
                i = t.q,
                a = void 0 === i ? [] : i;
              this.isStageIdCorrect({ l: e }) &&
                (this.setStageId(e),
                this.setTotalGain(r),
                this.setCountAllPlayers(o),
                this.setPlayers({
                  players: a,
                  allUserAccounts: this.accounts,
                }));
            },
            onCrashEvent: function (t) {
              this.isStageIdCorrect(t) &&
                this.isStageStatusIdCorrect(t, ie.w7.isEnded) &&
                !this.isCrashed &&
                (this.setStageId(t.l),
                this.setStageStatusId(ie.w7.isEnded),
                this.setCoefChange(t));
            },
            onBetEvent: function (t) {
              var e = this;
              return Jr(
                Kr().m(function r() {
                  var n, o, i;
                  return Kr().w(function (r) {
                    for (;;)
                      switch (r.n) {
                        case 0:
                          if (t.ok || t.ec !== ie.hH) {
                            r.n = 2;
                            break;
                          }
                          return (r.n = 1), e.redirectForMaintenanceError(t.ec);
                        case 1:
                          return r.a(2);
                        case 2:
                          if (
                            ((n = t.i),
                            (o = void 0 === n ? 0 : n),
                            (i =
                              !e.isNextStageBetFeatureActive ||
                              e.nextStageId <= e.stageId ||
                              e.nextStageId !== t.l),
                            t.ok &&
                              !e.isAnalyticsSent &&
                              e.sendAnalyticsEventBet(
                                i
                                  ? F.FatmanEvent.GAME_SUCCESS_BET
                                  : F.FatmanEvent.GAME_SUCCESS_BET_NEXT,
                                o
                              ),
                            e.setBlockedActivity(!1),
                            e.isStageIdCorrect(t))
                          ) {
                            r.n = 3;
                            break;
                          }
                          return r.a(2);
                        case 3:
                          if (
                            (e.setDelay(Date.now()), i && e.clearResult(), t.ok)
                          ) {
                            r.n = 5;
                            break;
                          }
                          return (
                            i &&
                              (e.disableIsBetProcessed(o),
                              e.setDisableAutoGameErrorText(t.et, t.ec),
                              e.stopAutoGame(),
                              e.setGameStarted(!1)),
                            e.disableIsWaitingActionResponse(o),
                            (r.n = 4),
                            e.checkToken(t)
                          );
                        case 4:
                          return r.a(2);
                        case 5:
                          return (
                            e.enableIsBetProcessed(o),
                            (r.n = 6),
                            e.betsData[o].waitingActionResponsePromise
                          );
                        case 6:
                          e.disableIsWaitingActionResponse(o),
                            i ? e.onMainBet(t, o) : e.onNextStageBet(t, o),
                            t.b && e.onBalanceUpdate(t),
                            (e.isAnalyticsSent = !1);
                        case 7:
                          return r.a(2);
                      }
                  }, r);
                })
              )();
            },
            onCashout: function (t) {
              var e = this;
              return Jr(
                Kr().m(function r() {
                  var n, o;
                  return Kr().w(function (r) {
                    for (;;)
                      switch (r.n) {
                        case 0:
                          if (
                            e.isStageIdCorrect(t) &&
                            !(
                              t.ec === ie.S2 && e.stageStatusId >= ie.w7.isEnded
                            )
                          ) {
                            r.n = 1;
                            break;
                          }
                          return r.a(2);
                        case 1:
                          if (
                            (e.setDelay(Date.now()),
                            (n = t.i),
                            (o = void 0 === n ? 0 : n),
                            t.ok)
                          ) {
                            r.n = 3;
                            break;
                          }
                          return (
                            e.disableIsWaitingActionResponse(o),
                            (r.n = 2),
                            e.redirectForMaintenanceError(t.ec)
                          );
                        case 2:
                          return e.onFailure(t), r.a(2);
                        case 3:
                          return (
                            e.addUserBetToPlayersList(t),
                            t.win && e.setResultPopup(t.win, t.l, o),
                            (r.n = 4),
                            e.betsData[o].waitingActionResponsePromise
                          );
                        case 4:
                          e.disableIsWaitingActionResponse(o),
                            e.updateMainBetData({ value: t, betIndex: o }),
                            e.setBlockedActivity(!0);
                        case 5:
                          return r.a(2);
                      }
                  }, r);
                })
              )();
            },
            onResult: function (t) {
              var e;
              if (this.isStageIdCorrect(t)) {
                this.addUserBetToPlayersList(t);
                var r =
                    null === (e = this.$route.query) || void 0 === e
                      ? void 0
                      : e.tzo,
                  n = zr()(r);
                this.setHistory({
                  history: [t],
                  timezone: n,
                  isNewHistoryItem: !0,
                }),
                  this.setResultPopup(t.win || 0, t.l, t.i),
                  this.setIsResultReceived(!0);
              }
            },
            onBalanceUpdate: function (t) {
              this.setGameAccountBalance(t.b), this.updateBalanceFromGame();
            },
            onPing: function (t) {
              var e = this;
              return Jr(
                Kr().m(function r() {
                  var n;
                  return Kr().w(function (r) {
                    for (;;)
                      switch (r.n) {
                        case 0:
                          return (r.n = 1), e.$updateFrame();
                        case 1:
                          if (
                            "hidden" !== document.visibilityState &&
                            !e.freezeGame
                          ) {
                            r.n = 2;
                            break;
                          }
                          return r.a(2);
                        case 2:
                          if (
                            (e.setIsWaitingConnectionShown(!1),
                            e.clearPingWaitingConnection(),
                            void 0 !== (n = ie.G7[t]))
                          ) {
                            r.n = 3;
                            break;
                          }
                          return r.a(2);
                        case 3:
                          return (
                            t === ie.w7.isStarted && (n -= e.getCurrentTime()),
                            (r.n = 4),
                            e.startWaitingConnection(n)
                          );
                        case 4:
                          e.resetPingWaitingConnectionTimer = r.v;
                        case 5:
                          return r.a(2);
                      }
                  }, r);
                })
              )();
            },
            clearPingWaitingConnection: function () {
              this.resetPingWaitingConnectionTimer &&
                (this.resetPingWaitingConnectionTimer(),
                (this.resetPingWaitingConnectionTimer = null));
            },
            isStageIdCorrect: function () {
              var t = (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              ).l;
              return (
                !!this.stageId &&
                (!(t < this.stageId) ||
                  (console.warn("Incorrect round update received", t), !1))
              );
            },
            isStageStatusIdCorrect: function (t, e) {
              var r = t.l;
              return (
                !(
                  !this.isRegistration &&
                  this.stageStatusId > e &&
                  this.stageId === r
                ) || (console.warn("Incorrect round update received", r, e), !1)
              );
            },
            checkToken: function (t) {
              var e = this;
              return Jr(
                Kr().m(function r() {
                  var n, o, i;
                  return Kr().w(function (r) {
                    for (;;)
                      switch (r.n) {
                        case 0:
                          if (t.ec === ie.vR || t.ec === ie.hH) {
                            r.n = 1;
                            break;
                          }
                          return e.onFailure(t), r.a(2);
                        case 1:
                          if (!e.activeAccountId) {
                            r.n = 3;
                            break;
                          }
                          return (
                            (r.n = 2), (0, $r.emitShowAuthenticationFailed)()
                          );
                        case 2:
                          (n = r.v),
                            (o = n.token),
                            (i = void 0 === o ? null : o),
                            e.setToken(i);
                        case 3:
                          return (
                            e.handleCloseAllPopup(),
                            (r.n = 4),
                            e.stopConnection()
                          );
                        case 4:
                          return r.a(2);
                      }
                  }, r);
                })
              )();
            },
            onFailure: function (t) {
              var e = t.et,
                r = t.ec,
                n = r && e ? "".concat(r, " ").concat(e) : e;
              this.handleCloseAllPopup(),
                this.showErrorPopup(n || this.$t("common.errorDefault"));
            },
            addUserBetToPlayersList: function (t) {
              t &&
                this.setPlayers({
                  players: [
                    en(
                      en({}, t),
                      {},
                      {
                        u: this.gameAccountId.toString(),
                        id: -1 * ((t.i || 0) + 1),
                      }
                    ),
                  ],
                  allUserAccounts: this.accounts,
                });
            },
            restoreAutoBetSettings: function (t) {
              var e = this,
                r = t.bets;
              (void 0 === r ? [] : r).forEach(function (t) {
                var r = t.x,
                  n = t.i,
                  o = void 0 === n ? 0 : n;
                r &&
                  (e.setGameStarted(!0),
                  e.setCashoutAutoBet({ value: r, betIndex: o }));
              });
            },
            redirectForMaintenanceError: function (t) {
              var e = this;
              return Jr(
                Kr().m(function r() {
                  var n, o;
                  return Kr().w(function (r) {
                    for (;;)
                      switch (r.n) {
                        case 0:
                          if (t !== ie.hH) {
                            r.n = 3;
                            break;
                          }
                          return (
                            e.clearAllTimers(),
                            e.clearWaitingConnection(),
                            e.clearPingWaitingConnection(),
                            e.addCloseCallback(null),
                            (r.n = 1),
                            e.hardStopConnection()
                          );
                        case 1:
                          return (
                            (r.n = 2), e.loadActionsWorkStatus(Yr.uz.Games)
                          );
                        case 2:
                          (n = r.v),
                            (o = 2 === n),
                            Hr.BUILD_NAME_IS.V2 ||
                              Hr.BUILD_NAME_IS.V3 ||
                              (o
                                ? (0, $r.emitSetGameSectionUnderMaintenance)({
                                    id: Yr.uz.Games,
                                  })
                                : (0, $r.emitSetGameUnderMaintenance)({
                                    id: Number(e.$route.params.gameId),
                                  })),
                            e.redirectToErrorPage({
                              isUnderMaintenance: !o,
                              isGameSectionUnderMaintenance: o,
                            });
                        case 3:
                          return r.a(2);
                      }
                  }, r);
                })
              )();
            },
            onMainBet: function (t, e) {
              this.setStageId(t.l),
                this.setGameStarted(!0),
                this.restoreAutoBetSettings({ bets: [t] }),
                t.bn && this.activatedBonus({ BNTP: t.bntp, BNID: t.bn }),
                this.addUserBetToPlayersList(t),
                this.setMainBetData({ value: t, betIndex: e }),
                (this.lastBetStageId = this.stageId),
                this.setNextStageBetData({ betIndex: e });
            },
            onNextStageBet: function (t, e) {
              this.setNextStageBetData({ value: t, betIndex: e }),
                this.showNextStageBetAlert(
                  this.$t("crash.nextStageBetAccepted")
                );
            },
            showNextStageBetAlert: function (t) {
              var e = this,
                r =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              t &&
                ((this.nextStageBetAlert = { msg: t, isError: r }),
                setTimeout(function () {
                  e.nextStageBetAlert.msg = "";
                }, ie.UP));
            },
            setAllBetsData: function (t) {
              var e = this;
              this.betsData.forEach(function (r, n) {
                var o, i;
                e.disableIsBetProcessed(n), e.disableIsWaitingActionResponse(n);
                var a = function (t) {
                    var e = t.i;
                    return (void 0 === e ? 0 : e) === n;
                  },
                  s = null === (o = t.nbs) || void 0 === o ? void 0 : o.find(a);
                e.setNextStageBetData({
                  value: s ? en(en({}, s), {}, { ok: !0 }) : null,
                  betIndex: n,
                });
                var c =
                  null === (i = t.bets) || void 0 === i ? void 0 : i.find(a);
                c &&
                  (e.setMainBetData({ value: c, betIndex: n }),
                  e.setSumBet({
                    id: n,
                    value: e.prepareSum(c.bet),
                    isUserInputs: !0,
                  }),
                  (e.lastBetStageId = c.l),
                  e.setGameStarted(!0),
                  e.enableIsBetProcessed(n),
                  c.bn && e.activatedBonus({ BNTP: c.bntp, BNID: c.bn }));
              });
            },
            sendAnalyticsEventBet: function (t, e) {
              this.sendAnalyticsEventWrapper(t, {
                i1: this.$route.params.gameId,
                i3: e,
                s1: this.isDemo ? "да" : "нет",
              });
            },
            sendAnalyticsEventWrapper: function (t, e) {
              (0, F.sendAnalyticsEvent)(t, en(en({}, e), {}, { i3: e.i3 + 1 }));
            },
            restoreBetsAfterOnStage: function () {
              var t = this;
              this.onBetsBeforeOnStageQueue.forEach(function (e) {
                t.onBetsEvent(e);
              }),
                (this.onBetsBeforeOnStageQueue = []);
            },
            startNextStageBet: function () {
              var t = this;
              this.betsData.forEach(function (e, r) {
                var n = e.mainBetData,
                  o = e.nextStageBetData;
                t.stageId === (null == o ? void 0 : o.l) &&
                  t.stageId !== (null == n ? void 0 : n.l) &&
                  (t.enableIsBetProcessed(r),
                  (t.isAnalyticsSent = !0),
                  t.onBetEvent(o));
              });
            },
          }
        ),
      };
      function on(t) {
        return (
          (on =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          on(t)
        );
      }
      function an() {
        var t,
          e,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var c = n && n.prototype instanceof s ? n : s,
            u = Object.create(c.prototype);
          return (
            sn(
              u,
              "_invoke",
              (function (r, n, o) {
                var i,
                  s,
                  c,
                  u = 0,
                  l = o || [],
                  p = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: h,
                    f: h.bind(t, 4),
                    d: function (e, r) {
                      return (i = e), (s = 0), (c = t), (f.n = r), a;
                    },
                  };
                function h(r, n) {
                  for (
                    s = r, c = n, e = 0;
                    !p && u && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      i = l[e],
                      h = f.p,
                      d = i[2];
                    r > 3
                      ? (o = d === n) &&
                        ((c = i[(s = i[4]) ? 5 : ((s = 3), 3)]),
                        (i[4] = i[5] = t))
                      : i[0] <= h &&
                        ((o = r < 2 && h < i[1])
                          ? ((s = 0), (f.v = n), (f.n = i[1]))
                          : h < d &&
                            (o = r < 3 || i[0] > n || n > d) &&
                            ((i[4] = r), (i[5] = n), (f.n = d), (s = 0)));
                  }
                  if (o || r > 1) return a;
                  throw ((p = !0), n);
                }
                return function (o, l, d) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === l && h(l, d), s = l, c = d;
                    (e = s < 2 ? t : c) || !p;

                  ) {
                    i ||
                      (s
                        ? s < 3
                          ? (s > 1 && (f.n = -1), h(s, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), i)) {
                        if ((s || (o = "next"), (e = i[o]))) {
                          if (!(e = e.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          (c = e.value), s < 2 && (s = 0);
                        } else
                          1 === s && (e = i.return) && e.call(i),
                            s < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method"
                              )),
                              (s = 1));
                        i = t;
                      } else if ((e = (p = f.n < 0) ? c : r.call(n, f)) !== a)
                        break;
                    } catch (e) {
                      (i = t), (s = 1), (c = e);
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: e, done: p };
                };
              })(r, o, i),
              !0
            ),
            u
          );
        }
        var a = {};
        function s() {}
        function c() {}
        function u() {}
        e = Object.getPrototypeOf;
        var l = [][n]
            ? e(e([][n]()))
            : (sn((e = {}), n, function () {
                return this;
              }),
              e),
          p = (u.prototype = s.prototype = Object.create(l));
        function f(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, u)
              : ((t.__proto__ = u), sn(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(p)),
            t
          );
        }
        return (
          (c.prototype = u),
          sn(p, "constructor", u),
          sn(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          sn(u, o, "GeneratorFunction"),
          sn(p),
          sn(p, o, "Generator"),
          sn(p, n, function () {
            return this;
          }),
          sn(p, "toString", function () {
            return "[object Generator]";
          }),
          (an = function () {
            return { w: i, m: f };
          })()
        );
      }
      function sn(t, e, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        (sn = function (t, e, r, n) {
          function i(e, r) {
            sn(t, e, function (t) {
              return this._invoke(e, r, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: r,
                  enumerable: !n,
                  configurable: !n,
                  writable: !n,
                })
              : (t[e] = r)
            : (i("next", 0), i("throw", 1), i("return", 2));
        }),
          sn(t, e, r, n);
      }
      function cn(t, e, r, n, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, o);
      }
      function un(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(e, r);
            function a(t) {
              cn(i, n, o, a, s, "next", t);
            }
            function s(t) {
              cn(i, n, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function ln(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function pn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ln(Object(r), !0).forEach(function (e) {
                fn(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ln(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function fn(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != on(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != on(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == on(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var hn;
      const dn = {
        mixins: [nn],
        inject: { hostSettings: { from: Wr.HOST_SETTINGS_INJECTION_KEY } },
        data: function () {
          return {
            isConnectionAlive: !0,
            makeConnectionIsProcessed: !1,
            visibilityTimeout: 0,
            isHardConnectionStopped: !1,
            disconnectedPromise: null,
            stopWaitingConnection: null,
            lastRequestTimestamp: null,
            lastDelayList: [],
            isNetworkTroubles: !1,
          };
        },
        computed: pn(
          pn(
            pn({}, (0, T.mapGetters)("user", ["token"])),
            (0, T.mapGetters)("currency", ["currentCurrency"])
          ),
          {},
          {
            currencyId: function () {
              return this.activeAccountCurrency
                ? this.activeAccountCurrency.id
                : this.currentCurrency.id;
            },
          }
        ),
        watch: {
          activeAccountId: function () {
            var t = this;
            return un(
              an().m(function e() {
                return an().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        t.setIsWaitingConnectionShown(!0);
                      case 1:
                        return e.a(2);
                    }
                }, e);
              })
            )();
          },
          token: function () {
            var t = this;
            return un(
              an().m(function e() {
                return an().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (e.n = 1), t.hardClearGame();
                      case 1:
                        return e.a(2);
                    }
                }, e);
              })
            )();
          },
          isConnectionAlive: function (t) {
            this.setIsWaitingConnectionShown(!t);
          },
        },
        beforeUnmount: function () {
          document.removeEventListener(
            "visibilitychange",
            this.visibilityHandler
          );
        },
        methods: pn(
          pn(
            {},
            (0, T.mapMutations)("crash/bets", [
              "setWaitingActionResponsePromise",
            ])
          ),
          {},
          {
            onloadHandler: function () {
              var t = this;
              this.makeNewConnection(),
                (this.visibilityHandler = un(
                  an().m(function e() {
                    return an().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            if (
                              !(
                                t.makeConnectionIsProcessed ||
                                t.reconnectCount >= ie.XK
                              )
                            ) {
                              e.n = 1;
                              break;
                            }
                            return e.a(2);
                          case 1:
                            if (
                              "hidden" !== document.visibilityState ||
                              t.freezeGame
                            ) {
                              e.n = 2;
                              break;
                            }
                            t.visibilityDisconnected(), (e.n = 4);
                            break;
                          case 2:
                            if (!t.visibilityTimeout) {
                              e.n = 3;
                              break;
                            }
                            t.clearVisibilityTimeout(), (e.n = 4);
                            break;
                          case 3:
                            if (!t.freezeGame) {
                              e.n = 4;
                              break;
                            }
                            return (e.n = 4), t.connectAfterDisconnect();
                          case 4:
                            t.$forceUpdate();
                          case 5:
                            return e.a(2);
                        }
                    }, e);
                  })
                )),
                document.addEventListener(
                  "visibilitychange",
                  this.visibilityHandler
                );
            },
            visibilityDisconnected: function () {
              var t = this;
              this.clearVisibilityTimeout(),
                this.setDisableAutoGameErrorText("visibility"),
                this.stopAutoGame(),
                (this.visibilityTimeout = setTimeout(function () {
                  return t.hardClearGame(!0);
                }, ie.vb));
            },
            hardClearGame: function () {},
            stopConnection: function () {
              var t = this;
              return un(
                an().m(function e() {
                  return an().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            t.setIsWaitingConnectionShown(!0),
                            (e.n = 1),
                            hn.stopConnection()
                          );
                        case 1:
                          return e.a(2);
                      }
                  }, e);
                })
              )();
            },
            hardStopConnection: function () {
              var t = this;
              return un(
                an().m(function e() {
                  return an().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (t.isHardConnectionStopped = !0),
                            (e.n = 1),
                            t.stopConnection()
                          );
                        case 1:
                          return e.a(2);
                      }
                  }, e);
                })
              )();
            },
            clearVisibilityTimeout: function () {
              this.visibilityTimeout &&
                (clearTimeout(this.visibilityTimeout),
                (this.visibilityTimeout = 0));
            },
            connectAfterDisconnect: function () {
              var t = this;
              return un(
                an().m(function e() {
                  return an().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (!t.makeConnectionIsProcessed) {
                            e.n = 1;
                            break;
                          }
                          return e.a(2);
                        case 1:
                          return (e.n = 2), t.disconnectedPromise;
                        case 2:
                          return (e.n = 3), t.makeNewConnection();
                        case 3:
                          return e.a(2);
                      }
                  }, e);
                })
              )();
            },
            offlineHandler: function () {
              this.freezeGame ||
                (this.startWaitingMakeConnection(0),
                this.hardClearGame(!0),
                this.setDisableAutoGameErrorText("offline"),
                this.stopAutoGame());
            },
            onlineHandler: function () {
              var t = this;
              return un(
                an().m(function e() {
                  return an().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (e.n = 1), t.disconnectedPromise;
                        case 1:
                          return (
                            (t.reconnectCount = 0),
                            (e.n = 2),
                            t.makeNewConnection()
                          );
                        case 2:
                          return e.a(2);
                      }
                  }, e);
                })
              )();
            },
            startWaitingMakeConnection: function () {
              var t = arguments,
                e = this;
              return un(
                an().m(function r() {
                  var n;
                  return an().w(function (r) {
                    for (;;)
                      switch (r.n) {
                        case 0:
                          if (
                            ((n = t.length > 0 && void 0 !== t[0] ? t[0] : 600),
                            !e.stopWaitingConnection)
                          ) {
                            r.n = 1;
                            break;
                          }
                          return r.a(2);
                        case 1:
                          return (r.n = 2), e.startWaitingConnection(n);
                        case 2:
                          e.stopWaitingConnection = r.v;
                        case 3:
                          return r.a(2);
                      }
                  }, r);
                })
              )();
            },
            clearWaitingConnection: function () {
              this.stopWaitingConnection &&
                (this.stopWaitingConnection(),
                (this.stopWaitingConnection = null));
            },
            makeNewConnection: function () {
              var t = this;
              return un(
                an().m(function e() {
                  return an().w(
                    function (e) {
                      for (;;)
                        switch ((e.p = e.n)) {
                          case 0:
                            if (!(t.reconnectCount >= ie.XK)) {
                              e.n = 1;
                              break;
                            }
                            return t.errorMaxCountReconnect(), e.a(2);
                          case 1:
                            return (
                              t.closePopup("ErrorPopup"),
                              (t.makeConnectionIsProcessed = !0),
                              (e.n = 2),
                              t.startWaitingMakeConnection(0)
                            );
                          case 2:
                            return (e.p = 2), (e.n = 3), t.createConnection();
                          case 3:
                            e.n = 5;
                            break;
                          case 4:
                            (e.p = 4), e.v, t.errorMakeConnectionHandler();
                          case 5:
                            return e.a(2);
                        }
                    },
                    e,
                    null,
                    [[2, 4]]
                  );
                })
              )();
            },
            createConnection: function () {
              var t = this;
              return un(
                an().m(function e() {
                  var r, n, o;
                  return an().w(
                    function (e) {
                      for (;;)
                        switch ((e.p = e.n)) {
                          case 0:
                            return (
                              (r = new URLSearchParams(
                                t.hostSettings.GAME_SOCKET_QUERY_PARAMS
                              )).append("lng", (0, Rr.getCurrentLanguage)()),
                              r.append("v", ie.Z5),
                              (n = "".concat(ie.ai, "?").concat(r)),
                              (e.n = 1),
                              Mr().createInstance(n, t.token)
                            );
                          case 1:
                            if (
                              ((hn = e.v), (e.p = 2), hn.isConnectionAlive())
                            ) {
                              e.n = 5;
                              break;
                            }
                            return (
                              hn.addCloseCallback(t.errorMakeConnectionHandler),
                              (e.n = 3),
                              hn.startConnection()
                            );
                          case 3:
                            return (
                              t.subscribeEvents(),
                              t.setLastRequestTimestamp(),
                              (e.n = 4),
                              t.login()
                            );
                          case 4:
                            e.n = 6;
                            break;
                          case 5:
                            t.clearWaitingConnection(),
                              (t.makeConnectionIsProcessed = !1);
                          case 6:
                            (t.isConnectionAlive = !0),
                              (t.isHardConnectionStopped = !1),
                              (t.freezeGame = !1),
                              (e.n = 8);
                            break;
                          case 7:
                            return (
                              (e.p = 7),
                              (o = e.v),
                              console.error("Connection error: ", o),
                              (t.isHardConnectionStopped = !1),
                              (e.n = 8),
                              t.errorMakeConnectionHandler()
                            );
                          case 8:
                            return e.a(2);
                        }
                    },
                    e,
                    null,
                    [[2, 7]]
                  );
                })
              )();
            },
            reconnectHandler: function () {
              var t = this;
              return un(
                an().m(function e() {
                  return an().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (
                            ((t.isConnectionAlive = !1),
                            !t.isHardConnectionStopped)
                          ) {
                            e.n = 1;
                            break;
                          }
                          return e.a(2);
                        case 1:
                          return (e.n = 2), (0, Lr.A)(ie.Uy);
                        case 2:
                          if ("hidden" !== document.visibilityState) {
                            e.n = 4;
                            break;
                          }
                          return (e.n = 3), t.reconnectHandler();
                        case 3:
                        case 5:
                          return e.a(2);
                        case 4:
                          return (e.n = 5), t.makeNewConnection();
                      }
                  }, e);
                })
              )();
            },
            login: function () {
              var t = this;
              return un(
                an().m(function e() {
                  var r, n;
                  return an().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (
                            (r = { activity: ie.hG }),
                            (n = ie.hi.REGISTER_AS_GUEST),
                            t.activeAccountId
                              ? ((r.account = t.activeAccountId),
                                (n = ie.hi.REGISTER_AS_USER))
                              : (r.currency = t.currencyId),
                            (e.n = 1),
                            hn.invoke(n, r)
                          );
                        case 1:
                          return e.a(2);
                      }
                  }, e);
                })
              )();
            },
            makeBet: function (t) {
              var e = this;
              return un(
                an().m(function r() {
                  var n, o, i, a;
                  return an().w(
                    function (r) {
                      for (;;)
                        switch ((r.p = r.n)) {
                          case 0:
                            return (
                              (n = t.betIndex),
                              (o = t.stage),
                              (i = t.sumBet),
                              (a = t.coeffAutoBet),
                              e.enableIsBetProcessed(n),
                              e.enableIsWaitingActionResponse(n),
                              e.setWaitingActionResponsePromise({
                                value: (0, Lr.A)(ie.OY),
                                betIndex: n,
                              }),
                              (r.p = 1),
                              e.setLastRequestTimestamp(),
                              (r.n = 2),
                              hn.invoke(ie.hi.BET, {
                                i: n,
                                stage: o,
                                bet: i,
                                bn: e.bonusId || void 0,
                                x: a || void 0,
                              })
                            );
                          case 2:
                            r.n = 4;
                            break;
                          case 3:
                            (r.p = 3),
                              r.v,
                              e.disableIsBetProcessed(n),
                              e.disableIsWaitingActionResponse(n);
                          case 4:
                            return r.a(2);
                        }
                    },
                    r,
                    null,
                    [[1, 3]]
                  );
                })
              )();
            },
            takeWinRequest: function (t, e) {
              var r = this;
              return un(
                an().m(function n() {
                  return an().w(
                    function (n) {
                      for (;;)
                        switch ((n.p = n.n)) {
                          case 0:
                            if (!r.betsData[e].isWaitingActionResponse) {
                              n.n = 1;
                              break;
                            }
                            return n.a(2);
                          case 1:
                            return (
                              r.enableIsWaitingActionResponse(e),
                              r.setWaitingActionResponsePromise({
                                value: (0, Lr.A)(ie.OY),
                                betIndex: e,
                              }),
                              (n.p = 2),
                              r.setLastRequestTimestamp(),
                              (n.n = 3),
                              hn.invoke(ie.hi.CASHOUT, { stage: t, i: e })
                            );
                          case 3:
                            n.n = 5;
                            break;
                          case 4:
                            (n.p = 4), n.v, r.disableIsWaitingActionResponse(e);
                          case 5:
                            return n.a(2);
                        }
                    },
                    n,
                    null,
                    [[2, 4]]
                  );
                })
              )();
            },
            subscribeEvents: function () {
              this.subscribeGeneralEvents(),
                this.activeAccountId && this.subscribeAccountEvents();
            },
            subscribeGeneralEvents: function () {
              hn.on(ie.Aj.ON_REGISTRATION, this.onRegistration),
                hn.on(ie.Aj.ON_STAGE, this.onStageEvent),
                hn.on(ie.Aj.ON_BETTING, this.onBetting),
                hn.on(ie.Aj.ON_START, this.onStartEvent),
                hn.on(ie.Aj.ON_BETS, this.onBetsEvent),
                hn.on(ie.Aj.ON_CASHOUTS, this.onCashoutsEvent),
                hn.on(ie.Aj.ON_CRASH, this.onCrashEvent);
            },
            subscribeAccountEvents: function () {
              hn.on(ie.Aj.ON_BET, this.onBetEvent),
                hn.on(ie.Aj.ON_RESULT, this.onResult),
                hn.on(ie.Aj.ON_CASHOUT, this.onCashout),
                hn.on(ie.Aj.ON_BALANCE, this.onBalanceUpdate);
            },
            authCallBack: function () {
              var t = this;
              return un(
                an().m(function e() {
                  return an().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          return (e.n = 1), t.hardClearGame();
                        case 1:
                          t.sumBetsArray.forEach(function (e, r) {
                            t.setSumBet({ id: r, value: t.recommendedBetSum });
                          });
                        case 2:
                          return e.a(2);
                      }
                  }, e);
                })
              )();
            },
            connectionEstablished: function () {
              this.makeConnectionIsProcessed &&
                (this.clearWaitingConnection(),
                (this.reconnectCount = 0),
                (this.makeConnectionIsProcessed = !1),
                this.$forceUpdate());
            },
            errorMakeConnectionHandler: function () {
              var t = this;
              return un(
                an().m(function e() {
                  return an().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          if (
                            ((t.reconnectCount += 1),
                            !(t.reconnectCount < ie.XK))
                          ) {
                            e.n = 2;
                            break;
                          }
                          return (e.n = 1), t.reconnectHandler();
                        case 1:
                          e.n = 3;
                          break;
                        case 2:
                          t.errorMaxCountReconnect();
                        case 3:
                          return e.a(2);
                      }
                  }, e);
                })
              )();
            },
            errorMaxCountReconnect: function () {
              this.clearGame(),
                this.clearPingWaitingConnection(),
                this.clearWaitingConnection(),
                this.setIsWaitingConnectionShown(!1),
                this.closePopup("ErrorPopup"),
                (this.makeConnectionIsProcessed = !1),
                this.showAuthErrorPopup(),
                this.setBlockGame(!0);
            },
            setBlockGame: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.setGameStarted(t), t || this.setBlockedActivity(!0);
            },
            setLastRequestTimestamp: function () {
              this.lastRequestTimestamp = Date.now();
            },
            setDelay: function (t) {
              var e = 0;
              this.lastRequestTimestamp &&
                ((e = t - this.lastRequestTimestamp),
                (this.lastRequestTimestamp = null)),
                this.lastDelayList.unshift(e),
                this.lastDelayList.splice(2),
                !this.isNetworkTroubles &&
                this.lastDelayList.every(function (t) {
                  return t >= ie.yh;
                })
                  ? (this.isNetworkTroubles = !0)
                  : this.isNetworkTroubles &&
                    this.lastDelayList.every(function (t) {
                      return t < ie.yh;
                    }) &&
                    (this.isNetworkTroubles = !1);
            },
            addCloseCallback: function (t) {
              hn.addCloseCallback(t);
            },
          }
        ),
      };
      var mn = [
          { value: 1.2, transform: 329 },
          { value: 1.4, transform: 268 },
          { value: 1.6, transform: 207 },
          { value: 1.8, transform: 146 },
          { value: 2, transform: 85 },
        ],
        vn = [
          { value: 1, transform: 90 },
          { value: 2, transform: 240 },
          { value: 3, transform: 390 },
          { value: 4, transform: 540 },
          { value: 5, transform: 690 },
          { value: 6, transform: 840 },
          { value: 7, transform: 990 },
          { value: 8, transform: 1140 },
        ];
      function bn(t) {
        return (
          (bn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          bn(t)
        );
      }
      function yn() {
        var t,
          e,
          r = "function" == typeof Symbol ? Symbol : {},
          n = r.iterator || "@@iterator",
          o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
          var c = n && n.prototype instanceof s ? n : s,
            u = Object.create(c.prototype);
          return (
            gn(
              u,
              "_invoke",
              (function (r, n, o) {
                var i,
                  s,
                  c,
                  u = 0,
                  l = o || [],
                  p = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: h,
                    f: h.bind(t, 4),
                    d: function (e, r) {
                      return (i = e), (s = 0), (c = t), (f.n = r), a;
                    },
                  };
                function h(r, n) {
                  for (
                    s = r, c = n, e = 0;
                    !p && u && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      i = l[e],
                      h = f.p,
                      d = i[2];
                    r > 3
                      ? (o = d === n) &&
                        ((c = i[(s = i[4]) ? 5 : ((s = 3), 3)]),
                        (i[4] = i[5] = t))
                      : i[0] <= h &&
                        ((o = r < 2 && h < i[1])
                          ? ((s = 0), (f.v = n), (f.n = i[1]))
                          : h < d &&
                            (o = r < 3 || i[0] > n || n > d) &&
                            ((i[4] = r), (i[5] = n), (f.n = d), (s = 0)));
                  }
                  if (o || r > 1) return a;
                  throw ((p = !0), n);
                }
                return function (o, l, d) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === l && h(l, d), s = l, c = d;
                    (e = s < 2 ? t : c) || !p;

                  ) {
                    i ||
                      (s
                        ? s < 3
                          ? (s > 1 && (f.n = -1), h(s, c))
                          : (f.n = c)
                        : (f.v = c));
                    try {
                      if (((u = 2), i)) {
                        if ((s || (o = "next"), (e = i[o]))) {
                          if (!(e = e.call(i, c)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          (c = e.value), s < 2 && (s = 0);
                        } else
                          1 === s && (e = i.return) && e.call(i),
                            s < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method"
                              )),
                              (s = 1));
                        i = t;
                      } else if ((e = (p = f.n < 0) ? c : r.call(n, f)) !== a)
                        break;
                    } catch (e) {
                      (i = t), (s = 1), (c = e);
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: e, done: p };
                };
              })(r, o, i),
              !0
            ),
            u
          );
        }
        var a = {};
        function s() {}
        function c() {}
        function u() {}
        e = Object.getPrototypeOf;
        var l = [][n]
            ? e(e([][n]()))
            : (gn((e = {}), n, function () {
                return this;
              }),
              e),
          p = (u.prototype = s.prototype = Object.create(l));
        function f(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, u)
              : ((t.__proto__ = u), gn(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(p)),
            t
          );
        }
        return (
          (c.prototype = u),
          gn(p, "constructor", u),
          gn(u, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          gn(u, o, "GeneratorFunction"),
          gn(p),
          gn(p, o, "Generator"),
          gn(p, n, function () {
            return this;
          }),
          gn(p, "toString", function () {
            return "[object Generator]";
          }),
          (yn = function () {
            return { w: i, m: f };
          })()
        );
      }
      function gn(t, e, r, n) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        (gn = function (t, e, r, n) {
          function i(e, r) {
            gn(t, e, function (t) {
              return this._invoke(e, r, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: r,
                  enumerable: !n,
                  configurable: !n,
                  writable: !n,
                })
              : (t[e] = r)
            : (i("next", 0), i("throw", 1), i("return", 2));
        }),
          gn(t, e, r, n);
      }
      function _n(t, e, r, n, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, o);
      }
      function Sn(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = t.apply(e, r);
            function a(t) {
              _n(i, n, o, a, s, "next", t);
            }
            function s(t) {
              _n(i, n, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function wn(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function An(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? wn(Object(r), !0).forEach(function (e) {
                En(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : wn(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function En(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != bn(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != bn(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == bn(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const Bn = {
          name: "Crash",
          components: {
            AdaptiveContainer: M.yx,
            AutoGamePopup: Pt,
            BetField: pe,
            BetFieldOld: vr,
            CrashPlayersBoard: W.A,
            CrashHistory: $.A,
            ResultNotification: Ar,
          },
          mixins: [R.GameMixin, dn],
          data: function () {
            return {
              consts: {
                gameStrokeValue: 385,
                DEVIATION_TRANSFORM_COEFFS_LINE: 61,
                DEFAULT_TRANSFORM_COEFFS_LINE: 380,
                DEVIATION_TRANSFORM_TIME_LINE: 150,
                DEFAULT_TRANSFORM_TIME_LINE: 90,
                MAX_COUNT_OF_TIME_LINE: 8,
                DEFAULT_COEFFS_LINE: D()(mn),
                DEFAULT_TIME_LINE: D()(vn),
              },
              errorInfoTimerId: null,
              unwatch: null,
              errorInfo: "",
              autobetErrorInfo: "",
              notEnoughMoneyPopupInfo: "",
              showErrorInfo: !1,
              requestTimerId: null,
              requestShowTimerId: null,
              requestCoeffId: null,
              requestAnimationId: null,
              then: 0,
              thenForCoeff: 0,
              sinceStart: 0,
              elapsed: 0,
              elapsedForCoeff: 0,
              remainingTimeInSeconds: null,
              startTimerTimestamp: 0,
              timeAutogame: 5e3,
              totalTimeInSeconds: 0,
              runningCoeffValue: null,
              coeffStartTime: null,
              isCrashed: !0,
              isCrashedGame: !1,
              pinPosition: D()(ie.i6),
              timeLine: D()(vn),
              coeffsLine: D()(mn),
              freezeGame: !1,
              requestTimers: [],
              disableMakeBetTime: ie.Em,
              showAutoGamePopup: !1,
              currentAutoBetIndex: 0,
              cancelResulTimeout: null,
              cancelClearResulTimeout: null,
              lastResults: [],
              resultsQueue: [],
              isAutoBetTypeSelected: !1,
              disableAutoGameErrorText: void 0,
            };
          },
          computed: An(
            An(
              An(
                An(
                  {},
                  (0, T.mapState)("waitingConnection", [
                    "isWaitingConnectionShown",
                  ])
                ),
                (0, T.mapGetters)("crash", [
                  "players",
                  "isFewBetsFeatureActive",
                  "gainCoef",
                ])
              ),
              (0, T.mapGetters)("crash/bets", [
                "isBetForNextStageDisabled",
                "isActiveBet",
                "disabledMakeMainBetForStage",
                "showNextStageBet",
                "isAnyBetProcessed",
                "isAnyBetActive",
                "isAllAutoBetDisabled",
              ])
            ),
            {},
            {
              currentTheme: function () {
                return this.isFewBetsFeatureActive ? "new" : "old";
              },
              timerInSeconds: function () {
                return this.remainingTimeInSeconds < 0 ||
                  this.stageStatusId !== ie.w7.isAcceptingBets
                  ? null
                  : this.remainingTimeInSeconds >= ie.Li
                  ? ie.Li
                  : this.remainingTimeInSeconds;
              },
              getCurrentTimeLine: function () {
                return this.timeLine.slice(-this.consts.MAX_COUNT_OF_TIME_LINE);
              },
              getCurrentCoeffsLine: function () {
                return this.coeffsLine.slice(-5);
              },
              getShineStyle: function () {
                return {
                  bottom: "".concat(this.pinPosition.bottom, "%"),
                  left: "".concat(this.pinPosition.left, "%"),
                };
              },
              getPinStyle: function () {
                var t = this.consts.MAX_COUNT_OF_TIME_LINE / 2,
                  e = parseFloat(this.sinceStart || 0),
                  r = e > 0 ? e / ie.OY : 0,
                  n = 0;
                return (
                  (n = t - r > 0 ? t - r : -(r - t)),
                  r > this.consts.MAX_COUNT_OF_TIME_LINE && (n = -t),
                  {
                    bottom: "".concat(this.pinPosition.bottom + n, "%"),
                    left: "".concat(this.pinPosition.left, "%"),
                    transform: "rotate(".concat(
                      this.pinPosition.transform,
                      "deg)"
                    ),
                  }
                );
              },
              getStrokeCoordX2: function () {
                return 0 === this.pinPosition.left
                  ? 60
                  : 12 * this.pinPosition.left + 170;
              },
              getStrokeCoordY2: function () {
                return 0 === this.pinPosition.bottom
                  ? 370
                  : this.consts.gameStrokeValue -
                      3.85 * this.pinPosition.bottom -
                      40;
              },
              getStrokeShadow: function () {
                return "\n                    M47 "
                  .concat(
                    this.consts.gameStrokeValue,
                    "\n                    Q"
                  )
                  .concat(
                    (this.getStrokeCoordX2 - 47) / 2,
                    "\n                    "
                  )
                  .concat(this.consts.gameStrokeValue, "\n                    ")
                  .concat(this.getStrokeCoordX2, " ")
                  .concat(this.getStrokeCoordY2, "\n                ");
              },
              getStrokeGrad2: function () {
                return "\n                    "
                  .concat(this.getStrokeShadow, "\n                    L")
                  .concat(this.getStrokeCoordX2, "\n                    ")
                  .concat(this.consts.gameStrokeValue, " Z\n                ");
              },
              getWaitBetClass: function () {
                return {
                  "crash-game__waiting--is-show":
                    this.stageStatusId === ie.w7.isWaiting && !this.resultMsg,
                };
              },
              disabledMakeBet: function () {
                var t = this;
                return this.disabledMakeMainBet.map(function (e, r) {
                  return !!(
                    t.disabledMakeBetCommonCondition ||
                    (e && t.isBetForNextStageDisabled[r]) ||
                    t.isActiveBet[r] ||
                    t.betsData[r].isAutoGameEnabled
                  );
                });
              },
              disabledMakeBetCommonCondition: function () {
                return (
                  this.makeConnectionIsProcessed ||
                  this.disabledMakeBetCurrencyAccount ||
                  (this.bonusFreeBetIsActive && this.isAnyBetProcessed) ||
                  (null === this.remainingTimeInSeconds &&
                    this.stageStatusId === ie.w7.isAcceptingBets) ||
                  this.disabledBetByTime
                );
              },
              disabledBetByTime: function () {
                return (
                  null !== this.remainingTimeInSeconds &&
                  this.remainingTimeInSeconds < this.disableMakeBetTime
                );
              },
              disabledMakeMainBet: function () {
                var t =
                  null !== this.runningCoeffValue ||
                  this.stageStatusId === ie.w7.isStarted ||
                  this.stageStatusId === ie.w7.isEnded;
                return this.disabledMakeMainBetForStage.map(function (e) {
                  return t || e;
                });
              },
              disabledMakeBetCurrencyAccount: function () {
                return (
                  !(!this.gameAccountId || this.gameAccountId < 0) &&
                  this.gameAccountId !== this.activeAccountId
                );
              },
              getTimerStyle: function () {
                return this.timerInSeconds > 0
                  ? {
                      transform: "rotate(".concat(
                        30 * this.timerInSeconds - 300,
                        "deg)"
                      ),
                    }
                  : {};
              },
              showBetAcceptedInfo: function () {
                return !(
                  !this.timerInSeconds || this.lastBetStageId !== this.stageId
                );
              },
              gameRenderingStopped: function () {
                return this.freezeGame || this.makeConnectionIsProcessed;
              },
              showRunningCoeff: function () {
                return (
                  null !== this.runningCoeffValue && !this.gameRenderingStopped
                );
              },
              gameRunning: function () {
                return !this.isCrashedGame && this.showRunningCoeff;
              },
              isBetAllowedStage: function () {
                return [
                  ie.w7.isWaiting,
                  ie.w7.isAcceptingBets,
                  ie.w7.isPlanned,
                ].includes(this.stageStatusId);
              },
              checkBlockedGame: function () {
                var t = this;
                return this.betsData.map(function (e, r) {
                  var n;
                  return e.isAutoGameEnabled
                    ? !(
                        t.isBetAllowedStage &&
                        e.baseAutoBet &&
                        e.limitAutoBet &&
                        e.cashoutAutoBet
                      )
                    : !(
                        (null !== (n = t.sumBetsArray[r]) &&
                          void 0 !== n &&
                          n.value) ||
                        t.bonusFreeBetIsActive
                      );
                });
              },
              newToastNotificationText: function () {
                return (
                  this.nextStageBetAlert.msg ||
                  (this.showErrorInfo && this.errorInfo) ||
                  this.anotherBetActiveWithAutoGameMsg
                );
              },
              showOldToastNotification: function () {
                return (
                  (this.showErrorInfo && this.errorInfo) ||
                  (!this.isFewBetsFeatureActive &&
                    this.showErrorInfo &&
                    this.autobetErrorInfo)
                );
              },
              oldToastNotificationText: function () {
                return this.errorInfo || this.autobetErrorInfo;
              },
              anotherBetActiveWithAutoGameMsg: function () {
                var t = this;
                return this.betsData.some(function (e) {
                  var r = e.mainBetData,
                    n = e.isAutoGameEnabled;
                  return (
                    ((null == r ? void 0 : r.bet) ||
                      !t.isBetAllowedStage ||
                      t.disabledBetByTime) &&
                    !(null != r && r.x) &&
                    n
                  );
                })
                  ? this.$t("crash.autoGameStartLater")
                  : "";
              },
            }
          ),
          watch: {
            recommendedBetSum: function () {
              for (var t = 0; t < this.betsData.length; t++)
                this.setBaseAutoBet({ betIndex: t, value: xr.baseAutoBet });
            },
            bonusFreeBetIsActive: function (t) {
              t &&
                (this.setDisableAutoGameErrorText("free bet"),
                this.stopAutoGame());
            },
            isAnyBetActive: function (t) {
              t
                ? this.setFreezeAccount(!0, this.activeAccountId)
                : this.enableAutogame || this.setFreezeAccount(!1);
            },
            enableAutogame: function (t) {
              var e = this;
              t ||
                (this.betsData.forEach(function (t, r) {
                  e.resetCurrentAutoBet(r),
                    e.disableIsAutoGameEnabledWithEvent(
                      r,
                      e.disableAutoGameErrorText
                    );
                }),
                (this.disableAutoGameErrorText = void 0));
            },
            isAllAutoBetDisabled: function (t) {
              t && this.enableAutogame && this.stopAutoGame();
            },
            isFirstConnection: function (t) {
              t || document.body.classList.remove("waiting-connection-crash");
            },
          },
          beforeCreate: function () {
            this.$store.registerModule("crash", Gr, {
              preserveState: this.$store.state.crash,
            });
          },
          created: function () {
            this.setToken(this.$route.query.ut),
              document.body.classList.add("waiting-connection-crash");
          },
          beforeUnmount: function () {
            this.$store.unregisterModule("crash"),
              this.stopConnection(),
              this.clearAllTimers(),
              this.unwatch && this.unwatch();
          },
          mounted: function () {
            var t = this;
            L.NotificationService.getInstance(),
              (this.unwatch = this.$watch(
                function () {
                  return {
                    cashoutAutoBet:
                      t.betsData[t.currentAutoBetIndex].cashoutAutoBet,
                    baseAutoBet: t.betsData[t.currentAutoBetIndex].baseAutoBet,
                    limitAutoBet:
                      t.betsData[t.currentAutoBetIndex].limitAutoBet,
                    calculatedSumBet: t.calculatedSumBet,
                  };
                },
                function () {
                  t.hideErrorInfo();
                },
                { deep: !0 }
              ));
          },
          methods: An(
            An(
              An(
                {},
                (0, T.mapActions)("crash/bets", [
                  "resetCurrentAutoBet",
                  "enableIsAutoGameEnabled",
                  "disableIsAutoGameEnabled",
                ])
              ),
              (0, T.mapMutations)("crash/bets", [
                "setCurrentAutoBet",
                "setBaseAutoBet",
              ])
            ),
            {},
            {
              checkSumBet: function (t) {
                if (this.checkBlockedGame[t])
                  return (
                    (this.errorInfo = this.$t("common.inputBetAmount")),
                    this.restoreAfterErrorCallback(),
                    this.setDisableAutoGameErrorText(this.errorInfo),
                    void this.disableIsAutoGameEnabledWithEvent(
                      t,
                      this.errorInfo
                    )
                  );
                var e = this.isDemo ? this.demoBalance : this.currentBalance,
                  r = this.isDemo
                    ? this.demoCurrencyCode
                    : this.gameCurrencyCode,
                  n = this.sumBetsArray[t].value;
                switch (!0) {
                  case n < this.minBet:
                    this.errorInfo = this.$t("common.minimumBetAmountIs", {
                      amount: this.minBet,
                      currency: r,
                    });
                    break;
                  case e < n:
                    this.checkAutoGamePossibility(),
                      (this.notEnoughMoneyPopupInfo = this.$t(
                        "common.notEnoughMoney"
                      ));
                    break;
                  case n > this.maxBet:
                    this.errorInfo = this.$t("common.maximumBetAmountIs", {
                      amount: this.maxBet,
                      currency: r,
                    });
                }
                return (
                  (!this.errorInfo && !this.notEnoughMoneyPopupInfo) ||
                  (this.restoreAfterErrorCallback(),
                  this.setDisableAutoGameErrorText(
                    this.errorInfo || this.notEnoughMoneyPopupInfo
                  ),
                  void this.disableIsAutoGameEnabledWithEvent(
                    t,
                    this.errorInfo || this.notEnoughMoneyPopupInfo
                  ))
                );
              },
              setErrorInfo: function (t) {
                if (
                  ((this.errorInfo = ""),
                  (this.autobetErrorInfo = ""),
                  (this.notEnoughMoneyPopupInfo = ""),
                  this.hideErrorInfo(),
                  this.showAutoGamePopup || this.isAutoBetTypeSelected)
                ) {
                  var e = this.isDemo
                      ? this.demoCurrencyCode
                      : this.gameCurrencyCode,
                    r = this.betsData[t],
                    n = r.baseAutoBet,
                    o = r.limitAutoBet,
                    i = r.cashoutAutoBet,
                    a = void 0 === i ? 0 : i;
                  switch (!0) {
                    case !n:
                      this.autobetErrorInfo = this.$t("crash.autoGameError6");
                      break;
                    case !o:
                      this.autobetErrorInfo = this.$t("crash.autoGameError7");
                      break;
                    case !a:
                      this.autobetErrorInfo = this.$t("crash.autoGameError8");
                      break;
                    case this.currentBalance < n:
                      this.notEnoughMoneyPopupInfo = this.$t(
                        "common.notEnoughMoney"
                      );
                      break;
                    case n < this.minBet:
                      this.autobetErrorInfo = this.$t("crash.autoGameError2", {
                        amount: this.minBet,
                        currency: e,
                      });
                      break;
                    case n > this.maxBet:
                      this.autobetErrorInfo = this.$t("crash.autoGameError3", {
                        amount: this.maxBet,
                        currency: e,
                      });
                      break;
                    case o > this.maxBet:
                      this.autobetErrorInfo = this.$t("crash.autoGameError5", {
                        amount: this.maxBet,
                        currency: e,
                      });
                      break;
                    case o < this.minBet:
                      this.autobetErrorInfo = this.$t("crash.autoGameError4", {
                        amount: this.minBet,
                        currency: e,
                      });
                      break;
                    case o < n:
                      this.autobetErrorInfo = this.$t("crash.autoGameError9");
                      break;
                    case a < ie.Z8:
                      this.autobetErrorInfo = this.$t("crash.autoGameError1", {
                        value: ie.Z8,
                      });
                  }
                } else this.checkSumBet(t);
              },
              customAfterHidePreloader: function () {
                this.onloadHandler();
              },
              hardClearGame: function () {
                var t = arguments,
                  e = this;
                return Sn(
                  yn().m(function r() {
                    var n;
                    return yn().w(function (r) {
                      for (;;)
                        switch (r.n) {
                          case 0:
                            if (
                              ((n = t.length > 0 && void 0 !== t[0] && t[0]),
                              (e.disconnectedPromise = e.$createPromise()),
                              (e.visibilityTimeout = 0),
                              (e.freezeGame = !0),
                              !n)
                            ) {
                              r.n = 2;
                              break;
                            }
                            return (r.n = 1), e.hardStopConnection();
                          case 1:
                            r.n = 3;
                            break;
                          case 2:
                            return (r.n = 3), e.stopConnection();
                          case 3:
                            e.setBlockGame(),
                              e.clearGame(),
                              e.setStageStatusId(ie.w7.isWaiting),
                              e.betsData.forEach(function (t, r) {
                                e.disableIsBetProcessed(r);
                              }),
                              e.setStageId(),
                              e.setNextStageId(),
                              (e.lastBetStageId = null),
                              (e.resultsQueue = []),
                              n && e.activeAccountId && e.endGameCallback(),
                              e.clearAllTimers(),
                              e.disconnectedPromise.resolve();
                          case 4:
                            return r.a(2);
                        }
                    }, r);
                  })
                )();
              },
              clearGame: function () {
                (this.isCrashedGame = !1),
                  this.setBetsAmount(),
                  this.setTotalGain(),
                  this.setCountAllPlayers(),
                  this.clearPlayers(),
                  this.setIsResultReceived(),
                  this.stopTimer(),
                  this.clearCoeffAnimationFrame(),
                  this.setDefaultGuideLines();
              },
              checkStartAutoGame: function () {
                var t = this,
                  e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                this.betsData.reduce(function (e, r, n) {
                  var o = r.currentAutoBet;
                  return r.isAutoGameEnabled
                    ? t.currentBalance < o &&
                        (t.showErrorPopup(t.$t("common.notEnoughMoney"), !0),
                        t.disableIsAutoGameEnabledWithEvent(
                          n,
                          "0 ".concat(t.$t("common.notEnoughMoney"))
                        ),
                        e)
                    : e;
                }, !0)
                  ? this.setBlockGame()
                  : this.isWaitingConnectionShown
                  ? this.requestTimeout(function () {
                      t.checkStartAutoGame();
                    }, ie.OY)
                  : this.isBetAllowedStage &&
                    !this.disabledBetByTime &&
                    (this.enableAutogame
                      ? (this.handleCloseAllPopup(),
                        "function" == typeof e
                          ? e()
                          : (this.clearResult(),
                            this.startGameCallback(),
                            this.betsData.forEach(function (e, r) {
                              e.isAutoGameEnabled &&
                                !t.isActiveBet[r] &&
                                t.startGame(r);
                            })))
                      : this.setBlockGame());
              },
              hideErrorInfo: function () {
                this.errorInfoTimerId && clearTimeout(this.errorInfoTimerId),
                  (this.showErrorInfo = !1);
              },
              checkError: function (t) {
                var e = this;
                return (
                  !(!this.checkBlockedGame[t] && this.bonusFreeBetIsActive) &&
                  (this.errorInfoTimerId && clearTimeout(this.errorInfoTimerId),
                  this.setErrorInfo(t),
                  this.errorInfo || this.autobetErrorInfo
                    ? ((this.showErrorInfo = !0),
                      (this.errorInfoTimerId = setTimeout(function () {
                        e.showErrorInfo = !1;
                      }, 4e3)),
                      !0)
                    : !!this.notEnoughMoneyPopupInfo &&
                      (this.isNextStageBetFeatureActive &&
                      this.isAnyBetProcessed
                        ? this.showNextStageBetAlert(
                            this.notEnoughMoneyPopupInfo,
                            !0
                          )
                        : this.showErrorPopup(this.notEnoughMoneyPopupInfo, !0),
                      !0))
                );
              },
              onClickStartGame: G()(
                function (t) {
                  this.startGame(t);
                },
                200,
                { trailing: !1 }
              ),
              startGame: function (t) {
                if (
                  !(
                    this.betsData[t].isWaitingActionResponse ||
                    (this.betsData[t].isBetProcessed &&
                      this.isBetForNextStageDisabled[t])
                  )
                )
                  if (this.mainAccountId) {
                    if (
                      this.betsData[t].isAutoGameEnabled ||
                      (this.sendAnalyticsEventBet(
                        F.FatmanEvent.CLICK_GAME_BET,
                        t
                      ),
                      !this.checkError(t))
                    ) {
                      var e = this.showNextStageBet[t]
                        ? this.nextStageId
                        : this.stageId;
                      this.setGameStarted(!0);
                      var r = Array.isArray(this.getCurrBet)
                          ? this.getCurrBet[t]
                          : this.getCurrBet,
                        n = 0;
                      this.betsData[t].isAutoGameEnabled &&
                        ((r = this.betsData[t].currentAutoBet),
                        (n = this.betsData[t].cashoutAutoBet)),
                        this.handleCloseAllPopup(),
                        this.setPrevGameCurrency(),
                        this.makeBet({
                          betIndex: t,
                          stage: e,
                          sumBet: r,
                          coeffAutoBet: n,
                        });
                    }
                  } else this.showAuthenticationRequired();
              },
              runAutoGameByNewStageId: function () {
                null !== this.stageId &&
                  this.stageId !== this.lastBetStageId &&
                  ([ie.w7.isWaiting, ie.w7.isAcceptingBets].includes(
                    this.stageStatusId
                  )
                    ? this.endGameCallback()
                    : this.stopAutoGame());
              },
              setCoefChange: function (t) {
                var e = t.f,
                  r = t.ts,
                  n = !!e;
                1 === e
                  ? this.pseudoRunGame()
                  : null === this.coeffStartTime &&
                    (this.stopTimer(), (this.isCrashed = n), this.runGame()),
                  (this.isCrashed = n),
                  n
                    ? ((this.isCrashedGame = !0),
                      this.setCoeffValue(e),
                      this.setPinPosition(this.getTimeByFormula(e)),
                      this.stopGame())
                    : (this.coeffStartTime = r);
              },
              showTimer: function (t) {
                var e = this;
                return Sn(
                  yn().m(function r() {
                    var n, o;
                    return yn().w(function (r) {
                      for (;;)
                        switch (r.n) {
                          case 0:
                            if (
                              (e.startTimerTimestamp ||
                                (e.startTimerTimestamp = t),
                              (n = Math.trunc(
                                ((t - e.startTimerTimestamp) / ie.OY) % 60
                              )),
                              (o = e.totalTimeInSeconds - n) ===
                                e.remainingTimeInSeconds)
                            ) {
                              r.n = 1;
                              break;
                            }
                            return (
                              (e.remainingTimeInSeconds = o),
                              e.$forceUpdate(),
                              (r.n = 1),
                              e.$updateFrame()
                            );
                          case 1:
                            e.remainingTimeInSeconds >= 1 &&
                              (e.requestShowTimerId = requestAnimationFrame(
                                e.showTimer
                              ));
                          case 2:
                            return r.a(2);
                        }
                    }, r);
                  })
                )();
              },
              runTimer: function (t, e) {
                var r = this;
                return Sn(
                  yn().m(function n() {
                    var o;
                    return yn().w(function (n) {
                      for (;;)
                        switch (n.n) {
                          case 0:
                            return (
                              (o = t + e),
                              (r.disableMakeBetTime = e / ie.OY),
                              (r.totalTimeInSeconds = Math.trunc(o / ie.OY)),
                              (r.remainingTimeInSeconds = r.totalTimeInSeconds),
                              r.$forceUpdate(),
                              (n.n = 1),
                              r.$updateFrame()
                            );
                          case 1:
                            r.requestTimerId = requestAnimationFrame(function (
                              t
                            ) {
                              r.showTimer(t), r.requestTimeout(r.stopTimer, o);
                            });
                          case 2:
                            return n.a(2);
                        }
                    }, n);
                  })
                )();
              },
              stopTimer: function () {
                cancelAnimationFrame(this.requestTimerId),
                  cancelAnimationFrame(this.requestShowTimerId),
                  (this.requestTimerId = null),
                  (this.requestShowTimerId = null),
                  (this.remainingTimeInSeconds = null),
                  (this.startTimerTimestamp = 0),
                  (this.totalTimeInSeconds = 0);
              },
              requestTimeout: function (t, e) {
                var r,
                  n = Date.now(),
                  o = function () {
                    Date.now() - n >= e ? t() : (r = requestAnimationFrame(o));
                  };
                r = requestAnimationFrame(o);
                var i = function () {
                  return cancelAnimationFrame(r);
                };
                return this.requestTimers.push(i), i;
              },
              startAutoGame: function (t) {
                this.activeAccountId
                  ? this.checkError(t) ||
                    (this.setEnableAutogame(!0),
                    this.enableIsAutoGameEnabled(t),
                    this.resetCurrentAutoBet(t),
                    this.closeAutoGamePopup(),
                    this.sendAnalyticsEventWrapper(
                      F.FatmanEvent.CLICK_GAME_AUTOGAME,
                      { i1: this.currentGameId, i3: t, s1: "999" }
                    ),
                    this.sendAnalyticsEventBet(F.FatmanEvent.CLICK_GAME_BET, t),
                    this.disabledMakeMainBet[t] ||
                      this.disabledBetByTime ||
                      this.startGame(t))
                  : this.showAuthenticationRequired();
              },
              stopAutoGame: function () {
                this.setEnableAutogame(!1),
                  this.gameAccountId || this.setFreezeAccount(!1);
              },
              handlePressEnter: function () {
                this.isWaitingConnectionShown ||
                  (this.showAutoGamePopup &&
                    !this.bonusFreeBetIsActive &&
                    this.startAutoGame(this.currentAutoBetIndex),
                  this.showAutoGamePopup ||
                    this.disabledMakeBet[0] ||
                    this.onClickStartGame(0));
              },
              getCurrentTime: function () {
                return null === this.coeffStartTime
                  ? 0
                  : Date.now() - this.coeffStartTime;
              },
              getValueByFormula: function (t) {
                if (!t) return 1;
                var e = (this.gainCoef / Math.pow(10, 9)) * Math.pow(t, 2) + 1;
                return e > ie.v0 ? ie.v0 : e;
              },
              getTimeByFormula: function (t) {
                return t
                  ? Math.sqrt((t - 1) / (this.gainCoef / Math.pow(10, 9)))
                  : 0;
              },
              setPinPosition: function () {
                var t = parseFloat(
                    (arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null) ||
                      this.sinceStart ||
                      0
                  ),
                  e = t > 0 ? t / ie.OY : 0,
                  r = e * ie.a8;
                r > 67 && (r = 67),
                  r < 0 && (r = 0),
                  (this.pinPosition.bottom = r);
                var n = e * ie.a8;
                n > 80 && (n = 80),
                  n < 0 && (n = 0),
                  (this.pinPosition.left = n);
              },
              getTransformTime: function (t) {
                return (
                  this.consts.DEFAULT_TRANSFORM_TIME_LINE +
                  this.consts.DEVIATION_TRANSFORM_TIME_LINE * t
                );
              },
              setTimeLinePosition: function () {
                var t = this,
                  e = Math.floor(this.sinceStart / ie.OY),
                  r = this.timeLine.length - 1;
                this.timeLine[r].value !== e &&
                  (this.timeLine.push({
                    value: e,
                    transform: this.getTransformTime(
                      this.consts.MAX_COUNT_OF_TIME_LINE
                    ),
                  }),
                  this.timeLine.shift());
                var n = ie.OY / this.consts.DEVIATION_TRANSFORM_TIME_LINE,
                  o = this.sinceStart % ie.OY,
                  i = (ie.OY - o) / n;
                this.timeLine = this.timeLine.map(function (e, r) {
                  return An(
                    An({}, e),
                    {},
                    { transform: t.getTransformTime(r) + i }
                  );
                });
              },
              getTransformCoeff: function (t) {
                return (
                  this.consts.DEFAULT_TRANSFORM_COEFFS_LINE -
                  this.consts.DEVIATION_TRANSFORM_COEFFS_LINE * t
                );
              },
              setDefaultGuideLines: function () {
                (this.timeLine = D()(this.consts.DEFAULT_TIME_LINE)),
                  (this.coeffsLine = D()(this.consts.DEFAULT_COEFFS_LINE)),
                  (this.pinPosition = D()(ie.i6));
              },
              setCoeffsLinePosition: function () {
                var t = this,
                  e = Math.floor(this.sinceStart / ie.OY),
                  r = this.coeffsLine.length - 1;
                this.coeffsLine[r].value !== e &&
                  (this.coeffsLine.push({
                    value: e,
                    transform: this.getTransformCoeff(ie.i8),
                  }),
                  this.coeffsLine.shift());
                var n = ie.OY / this.consts.DEVIATION_TRANSFORM_COEFFS_LINE,
                  o = this.sinceStart % ie.OY,
                  i = (ie.OY - o) / n;
                this.coeffsLine = this.coeffsLine.map(function (e, r) {
                  return An(
                    An({}, e),
                    {},
                    { transform: t.getTransformCoeff(r) - i }
                  );
                });
              },
              runGame: function () {
                this.setBlockedActivity(!1),
                  null === this.requestCoeffId &&
                    ((this.thenForCoeff = Date.now()),
                    (this.requestCoeffId = requestAnimationFrame(
                      this.startCoeffGrowth
                    ))),
                  null === this.requestAnimationId &&
                    ((this.then = Date.now()),
                    (this.requestAnimationId = requestAnimationFrame(
                      this.startAnimation
                    )));
              },
              setCoeffValue: function (t) {
                var e = function (t) {
                  return t.toFixed(3).slice(0, -1);
                };
                if (t) this.runningCoeffValue = e(t);
                else {
                  var r = this.getValueByFormula(this.getCurrentTime());
                  this.runningCoeffValue = e(r);
                }
              },
              startCoeffGrowth: function () {
                if (
                  !this.isCrashed &&
                  ((this.requestCoeffId = requestAnimationFrame(
                    this.startCoeffGrowth
                  )),
                  !this.isWaitingConnectionShown)
                ) {
                  var t = Date.now();
                  (this.elapsedForCoeff = t - this.thenForCoeff),
                    this.elapsedForCoeff > ie.El &&
                      ((this.thenForCoeff = t - (this.elapsedForCoeff % ie.El)),
                      this.setCoeffValue());
                }
              },
              startAnimation: function () {
                if (
                  (this.isCrashed ||
                    (this.requestAnimationId = requestAnimationFrame(
                      this.startAnimation
                    )),
                  !this.isWaitingConnectionShown)
                ) {
                  var t = Date.now();
                  (this.elapsed = t - this.then),
                    this.elapsed > ie.El &&
                      ((this.then = t - (this.elapsed % ie.El)),
                      this.setPinPosition(),
                      this.setTimeLinePosition(),
                      this.setCoeffsLinePosition(),
                      (this.sinceStart = t - this.coeffStartTime));
                }
              },
              pseudoRunGame: function () {
                this.setBlockedActivity(!1),
                  (this.requestCoeffId = requestAnimationFrame(
                    this.startCoeffGrowth
                  )),
                  (this.requestAnimationId = requestAnimationFrame(
                    this.startAnimation
                  ));
              },
              clearAllTimers: function () {
                this.clearVisibilityTimeout(),
                  this.requestTimers.forEach(function (t) {
                    return t();
                  }),
                  (this.requestTimers = []);
              },
              stopGame: function () {
                var t = this;
                this.setBlockedActivity(!0),
                  this.requestTimeout(function () {
                    t.stageStatusId !== ie.w7.isStarted &&
                      (t.setBlockedActivity(!0),
                      t.clearCoeffAnimationFrame(),
                      t.setDefaultGuideLines(),
                      t.enableAutogame ||
                        (t.gameStarted &&
                          (t.defaultClearGame(),
                          t.betsData.forEach(function (e) {
                            var r = e.nextStageBetData;
                            null != r &&
                              r.bn &&
                              r.l === t.nextStageId &&
                              t.activatedBonus({ BNTP: r.bntp, BNID: r.bn });
                          })),
                        t.isAnyBetActive || t.setBlockGame()));
                  }, ie.eq);
              },
              clearCoeffAnimationFrame: function () {
                cancelAnimationFrame(this.requestCoeffId),
                  cancelAnimationFrame(this.requestAnimationId),
                  (this.runningCoeffValue = null),
                  (this.requestCoeffId = null),
                  (this.requestAnimationId = null),
                  (this.isCrashed = !0),
                  (this.coeffStartTime = null),
                  (this.then = 0),
                  (this.thenForCoeff = 0),
                  (this.elapsed = 0),
                  (this.elapsedForCoeff = 0),
                  (this.sinceStart = 0);
              },
              setAutoGameSettings: function (t, e) {
                if (
                  this.betsData[e].isAutoGameEnabled &&
                  this.betsData[e].mainBetData.x ===
                    this.betsData[e].cashoutAutoBet
                ) {
                  var r = this.betsData[e],
                    n = r.currentAutoBet,
                    o = r.limitAutoBet,
                    i = r.selectedAutoBetInWinOption,
                    a = r.selectedAutoBetOnLossOption,
                    s = 2 * n;
                  ((t && i) || (!t && a)) &&
                    (s <= o
                      ? this.setCurrentAutoBet({ value: s, betIndex: e })
                      : this.setCurrentAutoBet({ value: o, betIndex: e })),
                    ((t && !i) || (!t && !a)) && this.resetCurrentAutoBet(e);
                } else this.resetCurrentAutoBet(e);
              },
              takeWin: function (t) {
                var e = this;
                return Sn(
                  yn().m(function r() {
                    return yn().w(function (r) {
                      for (;;)
                        switch (r.n) {
                          case 0:
                            return (r.n = 1), e.takeWinRequest(e.stageId, t);
                          case 1:
                            return r.a(2);
                        }
                    }, r);
                  })
                )();
              },
              setResultPopup: function (t, e) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  n = "".concat(r, "-").concat(e);
                this.lastResults.includes(n) ||
                  (this.lastResults.some(function (t) {
                    return !t.endsWith(e);
                  }) && (this.lastResults = []),
                  this.lastResults.push(n),
                  this.setAutoGameSettings(t, r),
                  this.showResultPopup(t, r));
              },
              showResultPopup: function (t, e) {
                var r = this;
                this.requestTimeout(function () {
                  var n, o;
                  if (
                    t ||
                    null === (n = r.resultsQueue[0]) ||
                    void 0 === n ||
                    !n.showLose
                  ) {
                    var i;
                    if (
                      t &&
                      null !== (o = r.resultsQueue[0]) &&
                      void 0 !== o &&
                      o.showLose
                    )
                      null === (i = r.cancelClearResulTimeout) ||
                        void 0 === i ||
                        i.call(r),
                        r.resultsQueue.shift();
                    r.clearResult(),
                      r.setDefaultResult(t, !0),
                      r.resultsQueue.push({
                        showWin: r.showWin,
                        showLose: r.showLose,
                        resultMsg: r.resultMsg,
                        betIndex: e,
                      }),
                      (r.cancelClearResulTimeout = r.requestTimeout(
                        function () {
                          r.clearResult(), r.resultsQueue.shift();
                        },
                        ie.iU
                      ));
                  }
                }, ie.OY);
              },
              showGameRulesPopup: function () {
                var t = this;
                return Sn(
                  yn().m(function e() {
                    var n;
                    return yn().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            return (
                              (e.n = 1), r.e(16682955).then(r.bind(r, 8269966))
                            );
                          case 1:
                            (n = e.v), t.defaultOpenModal(n, "GameRules");
                          case 2:
                            return e.a(2);
                        }
                    }, e);
                  })
                )();
              },
              openAutoGamePopup: function (t) {
                (this.showAutoGamePopup = !0), (this.currentAutoBetIndex = t);
              },
              closeAutoGamePopup: function () {
                this.showAutoGamePopup = !1;
              },
              disableIsAutoGameEnabledWithEvent: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : void 0;
                this.betsData[t].isAutoGameEnabled &&
                  (this.sendAnalyticsEventWrapper(
                    F.FatmanEvent.CLICK_GAME_AUTOGAME,
                    { i1: this.currentGameId, i3: t, s1: "Выкл", s2: e }
                  ),
                  this.disableIsAutoGameEnabled(t));
              },
              setDisableAutoGameErrorText: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                this.disableAutoGameErrorText = "".concat(e, " ").concat(t);
              },
              updateBalanceFromGame: function () {},
              insertSingleBet: function (t) {
                var e = this;
                this.betsData.forEach(function (r, n) {
                  e.setSumBet({
                    id: n,
                    value: e.prepareSum(t),
                    isUserInputs: !0,
                  });
                });
              },
            }
          ),
        },
        xn = (0, Nt.A)(Bn, [
          [
            "render",
            function (t, e, r, T, j, D) {
              var V = (0, n.resolveComponent)("SvgShadowLayout"),
                G = (0, n.resolveComponent)("CrashPlayersBoard"),
                R = (0, n.resolveComponent)("ResultNotification"),
                F = (0, n.resolveComponent)("CrashHistory"),
                M = (0, n.resolveComponent)("BetField"),
                L = (0, n.resolveComponent)("BetFieldOld"),
                W = (0, n.resolveComponent)("AdaptiveContainer"),
                $ = (0, n.resolveComponent)("AutoGamePopup");
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)(
                  "div",
                  { class: "crash", "data-theme": D.currentTheme },
                  [
                    (0, n.createVNode)(
                      W,
                      {
                        ratioMap: {
                          "0.0": {
                            0: {
                              sourceArea: { width: 1920, height: 868 },
                              targetArea: { x: 0, y: 0, width: 1, height: 1 },
                            },
                          },
                        },
                        class: "crash__adaptive",
                      },
                      {
                        default: (0, n.withCtx)(function () {
                          return [
                            (0, n.createElementVNode)("div", i, [
                              (0, n.createVNode)(V, {
                                svg: ["icons-sprite.svg", "loader.svg"],
                              }),
                              (0, n.createVNode)(
                                G,
                                {
                                  getAmountSum: function (e) {
                                    return t.prepareSum(e);
                                  },
                                  class: "crash__wrap crash__wrap--left",
                                },
                                null,
                                8,
                                ["getAmountSum"]
                              ),
                              (0, n.createElementVNode)("div", a, [
                                (0, n.createElementVNode)("div", s, [
                                  (0, n.createElementVNode)("div", c, [
                                    ((0, n.openBlock)(),
                                    (0, n.createElementBlock)("svg", u, [
                                      e[6] ||
                                        (e[6] = (0, n.createElementVNode)(
                                          "defs",
                                          null,
                                          [
                                            (0, n.createElementVNode)(
                                              "filter",
                                              {
                                                id: "dropshadow",
                                                height: "200%",
                                                width: "200%",
                                                x: "-50%",
                                                y: "-50%",
                                              },
                                              [
                                                (0, n.createElementVNode)(
                                                  "feDropShadow",
                                                  {
                                                    dx: "0",
                                                    dy: "0",
                                                    "flood-color": "#fff",
                                                    "flood-opacity": "1",
                                                    stdDeviation: "15",
                                                  }
                                                ),
                                              ]
                                            ),
                                            (0, n.createElementVNode)(
                                              "filter",
                                              {
                                                id: "shadow",
                                                height: "200%",
                                                width: "200%",
                                                x: "-50%",
                                                y: "-50%",
                                              },
                                              [
                                                (0, n.createElementVNode)(
                                                  "feFlood",
                                                  {
                                                    "flood-opacity": "0",
                                                    result:
                                                      "BackgroundImageFix",
                                                  }
                                                ),
                                                (0, n.createElementVNode)(
                                                  "feColorMatrix",
                                                  {
                                                    in: "SourceAlpha",
                                                    type: "matrix",
                                                    values:
                                                      "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                  }
                                                ),
                                                (0, n.createElementVNode)(
                                                  "feOffset"
                                                ),
                                                (0, n.createElementVNode)(
                                                  "feGaussianBlur",
                                                  { stdDeviation: "10.5" }
                                                ),
                                                (0, n.createElementVNode)(
                                                  "feColorMatrix",
                                                  {
                                                    type: "matrix",
                                                    values:
                                                      "0 0 0 0 0.819608 0 0 0 0 0.345098 0 0 0 0 0.121569 0 0 0 1 0",
                                                  }
                                                ),
                                                (0, n.createElementVNode)(
                                                  "feBlend",
                                                  {
                                                    in2: "BackgroundImageFix",
                                                    mode: "normal",
                                                    result:
                                                      "effect1_dropShadow",
                                                  }
                                                ),
                                                (0, n.createElementVNode)(
                                                  "feBlend",
                                                  {
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow",
                                                    mode: "normal",
                                                    result: "shape",
                                                  }
                                                ),
                                              ]
                                            ),
                                            (0, n.createElementVNode)(
                                              "linearGradient",
                                              {
                                                id: "grad",
                                                gradientUnits: "userSpaceOnUse",
                                              },
                                              [
                                                (0, n.createElementVNode)(
                                                  "stop",
                                                  {
                                                    offset: "0%",
                                                    "stop-color": "#FFE400",
                                                  }
                                                ),
                                                (0, n.createElementVNode)(
                                                  "stop",
                                                  {
                                                    offset: "100%",
                                                    "stop-color": "#C76404",
                                                  }
                                                ),
                                              ]
                                            ),
                                            (0, n.createElementVNode)(
                                              "linearGradient",
                                              {
                                                id: "grad2",
                                                gradientUnits: "userSpaceOnUse",
                                                x1: "250",
                                                x2: "250",
                                                y1: "170",
                                                y2: "365",
                                              },
                                              [
                                                (0, n.createElementVNode)(
                                                  "stop",
                                                  {
                                                    offset: "0%",
                                                    "stop-color": "#C1521E",
                                                  }
                                                ),
                                                (0, n.createElementVNode)(
                                                  "stop",
                                                  {
                                                    offset: "100%",
                                                    "stop-color": "#C1521E",
                                                    "stop-opacity": "0",
                                                  }
                                                ),
                                              ]
                                            ),
                                          ],
                                          -1
                                        )),
                                      e[7] ||
                                        (e[7] = (0, n.createElementVNode)(
                                          "g",
                                          null,
                                          [
                                            (0, n.createElementVNode)("path", {
                                              class: "crash-game__grid",
                                              d: "M47 324 h1160",
                                            }),
                                            (0, n.createElementVNode)("path", {
                                              class: "crash-game__grid",
                                              d: "M47 263 h1160",
                                            }),
                                            (0, n.createElementVNode)("path", {
                                              class: "crash-game__grid",
                                              d: "M47 202 h1160",
                                            }),
                                            (0, n.createElementVNode)("path", {
                                              class: "crash-game__grid",
                                              d: "M47 141 h1160",
                                            }),
                                            (0, n.createElementVNode)("path", {
                                              class: "crash-game__grid",
                                              d: "M47 80 h1160",
                                            }),
                                          ],
                                          -1
                                        )),
                                      (0, n.withDirectives)(
                                        (0, n.createElementVNode)(
                                          "g",
                                          l,
                                          [
                                            (0, n.createElementVNode)(
                                              "path",
                                              {
                                                d: D.getStrokeGrad2,
                                                fill: "url(#grad2)",
                                              },
                                              null,
                                              8,
                                              p
                                            ),
                                            (0, n.createElementVNode)(
                                              "path",
                                              {
                                                d: D.getStrokeShadow,
                                                class: "crash-game__stroke",
                                                filter: "url(#shadow)",
                                              },
                                              null,
                                              8,
                                              f
                                            ),
                                            (0, n.createElementVNode)(
                                              "circle",
                                              {
                                                cx: D.getStrokeCoordX2,
                                                cy: D.getStrokeCoordY2,
                                                fill: "#de8a06",
                                                r: "7",
                                              },
                                              null,
                                              8,
                                              h
                                            ),
                                          ],
                                          512
                                        ),
                                        [[n.vShow, D.showRunningCoeff]]
                                      ),
                                      e[8] ||
                                        (e[8] = (0, n.createElementVNode)(
                                          "clipPath",
                                          { id: "a" },
                                          [
                                            (0, n.createElementVNode)("rect", {
                                              height: "365",
                                              "stroke-width": "0",
                                              width: "1160",
                                              x: "47",
                                              y: "20",
                                            }),
                                          ],
                                          -1
                                        )),
                                      (0, n.withDirectives)(
                                        (0, n.createElementVNode)(
                                          "g",
                                          null,
                                          [
                                            (0, n.createElementVNode)(
                                              "text",
                                              d,
                                              (0, n.toDisplayString)(
                                                j.runningCoeffValue
                                              ) + "x ",
                                              1
                                            ),
                                          ],
                                          512
                                        ),
                                        [[n.vShow, D.showRunningCoeff]]
                                      ),
                                      (0, n.withDirectives)(
                                        (0, n.createElementVNode)(
                                          "g",
                                          m,
                                          [
                                            (0, n.createElementVNode)(
                                              "path",
                                              {
                                                d: "M47 ".concat(
                                                  j.consts.gameStrokeValue,
                                                  " h1160"
                                                ),
                                              },
                                              null,
                                              8,
                                              v
                                            ),
                                          ],
                                          512
                                        ),
                                        [[n.vShow, D.showRunningCoeff]]
                                      ),
                                      (0, n.createElementVNode)("g", null, [
                                        ((0, n.openBlock)(!0),
                                        (0, n.createElementBlock)(
                                          n.Fragment,
                                          null,
                                          (0, n.renderList)(
                                            D.getCurrentTimeLine,
                                            function (t, e) {
                                              return (
                                                (0, n.openBlock)(),
                                                (0, n.createElementBlock)(
                                                  "circle",
                                                  {
                                                    key: e,
                                                    transform:
                                                      "translate(".concat(
                                                        t.transform,
                                                        " 410)"
                                                      ),
                                                    class:
                                                      "crash-game__coordinate",
                                                    cx: "0",
                                                    cy: "-17",
                                                    r: "3",
                                                  },
                                                  null,
                                                  8,
                                                  b
                                                )
                                              );
                                            }
                                          ),
                                          128
                                        )),
                                      ]),
                                      (0, n.createElementVNode)("g", null, [
                                        ((0, n.openBlock)(!0),
                                        (0, n.createElementBlock)(
                                          n.Fragment,
                                          null,
                                          (0, n.renderList)(
                                            D.getCurrentCoeffsLine,
                                            function (t, e) {
                                              return (
                                                (0, n.openBlock)(),
                                                (0, n.createElementBlock)(
                                                  "circle",
                                                  {
                                                    key: e,
                                                    transform:
                                                      "translate(20 ".concat(
                                                        t.transform,
                                                        ")"
                                                      ),
                                                    class:
                                                      "crash-game__coordinate",
                                                    cx: "17",
                                                    cy: "-5",
                                                    r: "3",
                                                  },
                                                  null,
                                                  8,
                                                  y
                                                )
                                              );
                                            }
                                          ),
                                          128
                                        )),
                                      ]),
                                    ])),
                                  ]),
                                  (0, n.createElementVNode)(
                                    "div",
                                    {
                                      class: (0, n.normalizeClass)([
                                        {
                                          "crash-game__mountains--game":
                                            D.gameRunning,
                                        },
                                        "crash-game__mountains",
                                      ]),
                                    },
                                    e[9] ||
                                      (e[9] = [
                                        (0, n.createElementVNode)(
                                          "div",
                                          {
                                            class:
                                              "crash-game__mountain crash-game__mountain--5",
                                          },
                                          null,
                                          -1
                                        ),
                                        (0, n.createElementVNode)(
                                          "div",
                                          {
                                            class:
                                              "crash-game__mountain crash-game__mountain--4",
                                          },
                                          null,
                                          -1
                                        ),
                                        (0, n.createElementVNode)(
                                          "div",
                                          {
                                            class:
                                              "crash-game__mountain crash-game__mountain--3",
                                          },
                                          null,
                                          -1
                                        ),
                                        (0, n.createElementVNode)(
                                          "div",
                                          {
                                            class:
                                              "crash-game__mountain crash-game__mountain--2",
                                          },
                                          null,
                                          -1
                                        ),
                                        (0, n.createElementVNode)(
                                          "div",
                                          { class: "crash-game__mountain" },
                                          null,
                                          -1
                                        ),
                                      ]),
                                    2
                                  ),
                                  (0, n.createElementVNode)(
                                    "div",
                                    {
                                      class: (0, n.normalizeClass)([
                                        D.getWaitBetClass,
                                        "crash-game__waiting",
                                      ]),
                                    },
                                    [
                                      e[10] ||
                                        (e[10] = (0, n.createElementVNode)(
                                          "div",
                                          {
                                            class:
                                              "crash-game__pin crash-game__pin--waiting",
                                          },
                                          [
                                            (0, n.createElementVNode)("div", {
                                              class:
                                                "crash-game__shine crash-game__shine--waiting",
                                            }),
                                          ],
                                          -1
                                        )),
                                      (0, n.createElementVNode)(
                                        "p",
                                        g,
                                        (0, n.toDisplayString)(
                                          t.$t("crash.waitingGame")
                                        ),
                                        1
                                      ),
                                    ],
                                    2
                                  ),
                                  (0, n.createElementVNode)("div", _, [
                                    (0, n.withDirectives)(
                                      (0, n.createElementVNode)(
                                        "div",
                                        {
                                          style: (0, n.normalizeStyle)(
                                            D.getShineStyle
                                          ),
                                          class: "crash-game__shine",
                                        },
                                        null,
                                        4
                                      ),
                                      [[n.vShow, D.gameRunning]]
                                    ),
                                    (0, n.withDirectives)(
                                      (0, n.createElementVNode)(
                                        "div",
                                        {
                                          class: (0, n.normalizeClass)([
                                            {
                                              "crash-game__pin--crash":
                                                j.isCrashedGame,
                                            },
                                            "crash-game__pin",
                                          ]),
                                          style: (0, n.normalizeStyle)(
                                            D.getPinStyle
                                          ),
                                        },
                                        null,
                                        6
                                      ),
                                      [[n.vShow, D.showRunningCoeff]]
                                    ),
                                  ]),
                                  (0, n.createVNode)(
                                    R,
                                    {
                                      showBetAcceptedInfo:
                                        D.showBetAcceptedInfo,
                                      resultsQueue: j.resultsQueue,
                                      class: "crash-game__info",
                                    },
                                    null,
                                    8,
                                    ["showBetAcceptedInfo", "resultsQueue"]
                                  ),
                                  (0, n.withDirectives)(
                                    (0, n.createElementVNode)(
                                      "div",
                                      {
                                        class: (0, n.normalizeClass)([
                                          {
                                            "crash-timer--countdown":
                                              D.timerInSeconds <= 6,
                                          },
                                          "crash-game__timer crash-timer",
                                        ]),
                                      },
                                      [
                                        (0, n.createElementVNode)(
                                          "p",
                                          S,
                                          (0, n.toDisplayString)(
                                            D.timerInSeconds
                                          ),
                                          1
                                        ),
                                        e[11] ||
                                          (e[11] = (0, n.createElementVNode)(
                                            "div",
                                            { class: "crash-timer__circle" },
                                            null,
                                            -1
                                          )),
                                        (0, n.createElementVNode)(
                                          "div",
                                          {
                                            style: (0, n.normalizeStyle)(
                                              D.getTimerStyle
                                            ),
                                            class: "crash-timer__segments",
                                          },
                                          [
                                            ((0, n.openBlock)(),
                                            (0, n.createElementBlock)(
                                              n.Fragment,
                                              null,
                                              (0, n.renderList)(
                                                12,
                                                function (t) {
                                                  return (0,
                                                  n.createElementVNode)(
                                                    "div",
                                                    w
                                                  );
                                                }
                                              ),
                                              64
                                            )),
                                          ],
                                          4
                                        ),
                                      ],
                                      2
                                    ),
                                    [
                                      [
                                        n.vShow,
                                        D.timerInSeconds &&
                                          !D.gameRenderingStopped,
                                      ],
                                    ]
                                  ),
                                  (0, n.createVNode)(
                                    n.Transition,
                                    { name: "fade" },
                                    {
                                      default: (0, n.withCtx)(function () {
                                        return [
                                          t.isNetworkTroubles
                                            ? ((0, n.openBlock)(),
                                              (0, n.createElementBlock)(
                                                "div",
                                                A,
                                                [
                                                  e[12] ||
                                                    (e[12] = (0,
                                                    n.createElementVNode)(
                                                      "svg",
                                                      {
                                                        width: "24",
                                                        height: "24",
                                                        "aria-hidden": "true",
                                                        class:
                                                          "crash-game-notification__ico",
                                                      },
                                                      [
                                                        (0,
                                                        n.createElementVNode)(
                                                          "use",
                                                          {
                                                            "xlink:href":
                                                              "#crash-internet",
                                                          }
                                                        ),
                                                      ],
                                                      -1
                                                    )),
                                                  (0, n.createElementVNode)(
                                                    "span",
                                                    E,
                                                    (0, n.toDisplayString)(
                                                      t.$t(
                                                        "crash.networkTroubles"
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ]
                                              ))
                                            : (0, n.createCommentVNode)("", !0),
                                        ];
                                      }),
                                      _: 1,
                                    }
                                  ),
                                  (0, n.createElementVNode)(
                                    "button",
                                    {
                                      onClick:
                                        e[0] ||
                                        (e[0] = function (t) {
                                          return D.showGameRulesPopup();
                                        }),
                                      "data-testid": "game-rules-btn",
                                      class:
                                        "crash-btn crash__btn crash-btn--transparent",
                                    },
                                    [
                                      (0, n.createElementVNode)(
                                        "span",
                                        B,
                                        (0, n.toDisplayString)(
                                          t.$t("common.rulesWithSpaces")
                                        ),
                                        1
                                      ),
                                    ]
                                  ),
                                ]),
                                (0, n.createElementVNode)("div", x, [
                                  (0, n.createVNode)(F, {
                                    class: "crash__history",
                                  }),
                                  t.isFewBetsFeatureActive
                                    ? (0, n.createCommentVNode)("", !0)
                                    : ((0, n.openBlock)(),
                                      (0, n.createBlock)(
                                        n.Transition,
                                        { key: 0, name: "fade" },
                                        {
                                          default: (0, n.withCtx)(function () {
                                            return [
                                              D.showOldToastNotification
                                                ? ((0, n.openBlock)(),
                                                  (0, n.createElementBlock)(
                                                    "div",
                                                    O,
                                                    [
                                                      (0, n.createElementVNode)(
                                                        "button",
                                                        {
                                                          onClick:
                                                            e[1] ||
                                                            (e[1] =
                                                              function () {
                                                                return (
                                                                  D.hideErrorInfo &&
                                                                  D.hideErrorInfo.apply(
                                                                    D,
                                                                    arguments
                                                                  )
                                                                );
                                                              }),
                                                          "aria-label":
                                                            t.$t(
                                                              "common.close"
                                                            ),
                                                          title:
                                                            t.$t(
                                                              "common.close"
                                                            ),
                                                          "data-testid":
                                                            "game-close-error-btn",
                                                          class:
                                                            "crash-bet-error__close",
                                                        },
                                                        null,
                                                        8,
                                                        k
                                                      ),
                                                      (0, n.createElementVNode)(
                                                        "p",
                                                        I,
                                                        (0, n.toDisplayString)(
                                                          D.oldToastNotificationText
                                                        ),
                                                        1
                                                      ),
                                                    ]
                                                  ))
                                                : (0, n.createCommentVNode)(
                                                    "",
                                                    !0
                                                  ),
                                            ];
                                          }),
                                          _: 1,
                                        }
                                      )),
                                  (0, n.createElementVNode)("div", C, [
                                    t.isFewBetsFeatureActive
                                      ? ((0, n.openBlock)(),
                                        (0, n.createElementBlock)(
                                          n.Fragment,
                                          { key: 0 },
                                          [
                                            (0, n.createVNode)(
                                              n.Transition,
                                              { name: "fade" },
                                              {
                                                default: (0, n.withCtx)(
                                                  function () {
                                                    return [
                                                      D.newToastNotificationText
                                                        ? ((0, n.openBlock)(),
                                                          (0,
                                                          n.createElementBlock)(
                                                            "div",
                                                            {
                                                              key: 0,
                                                              class: (0,
                                                              n.normalizeClass)(
                                                                [
                                                                  {
                                                                    "crash-bet-info--is-error":
                                                                      t
                                                                        .nextStageBetAlert
                                                                        .isError ||
                                                                      j.showErrorInfo,
                                                                  },
                                                                  "crash-bet-info crash-bet__info",
                                                                ]
                                                              ),
                                                            },
                                                            [
                                                              (0,
                                                              n.createElementVNode)(
                                                                "span",
                                                                N,
                                                                (0,
                                                                n.toDisplayString)(
                                                                  D.newToastNotificationText
                                                                ),
                                                                1
                                                              ),
                                                            ],
                                                            2
                                                          ))
                                                        : (0,
                                                          n.createCommentVNode)(
                                                            "",
                                                            !0
                                                          ),
                                                    ];
                                                  }
                                                ),
                                                _: 1,
                                              }
                                            ),
                                            ((0, n.openBlock)(!0),
                                            (0, n.createElementBlock)(
                                              n.Fragment,
                                              null,
                                              (0, n.renderList)(
                                                D.disabledMakeBet,
                                                function (t, e) {
                                                  return (
                                                    (0, n.openBlock)(),
                                                    (0, n.createBlock)(
                                                      M,
                                                      {
                                                        key: e,
                                                        onStartGame: function (
                                                          t
                                                        ) {
                                                          return D.onClickStartGame(
                                                            e
                                                          );
                                                        },
                                                        onTakeWin: function (
                                                          t
                                                        ) {
                                                          return D.takeWin(e);
                                                        },
                                                        onOpenAutoGamePopup:
                                                          function (t) {
                                                            return D.openAutoGamePopup(
                                                              e
                                                            );
                                                          },
                                                        onStopAutoGame:
                                                          function (t) {
                                                            return D.disableIsAutoGameEnabledWithEvent(
                                                              e
                                                            );
                                                          },
                                                        disabledMakeBet: t,
                                                        betIndex: e,
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "onStartGame",
                                                        "onTakeWin",
                                                        "onOpenAutoGamePopup",
                                                        "onStopAutoGame",
                                                        "disabledMakeBet",
                                                        "betIndex",
                                                      ]
                                                    )
                                                  );
                                                }
                                              ),
                                              128
                                            )),
                                          ],
                                          64
                                        ))
                                      : ((0, n.openBlock)(),
                                        (0, n.createElementBlock)(
                                          n.Fragment,
                                          { key: 1 },
                                          [
                                            (0, n.createVNode)(
                                              L,
                                              {
                                                modelValue:
                                                  j.isAutoBetTypeSelected,
                                                "onUpdate:modelValue":
                                                  e[2] ||
                                                  (e[2] = function (t) {
                                                    return (j.isAutoBetTypeSelected =
                                                      t);
                                                  }),
                                                onStartGame:
                                                  e[3] ||
                                                  (e[3] = function (t) {
                                                    return D.onClickStartGame(
                                                      0
                                                    );
                                                  }),
                                                onTakeWin:
                                                  e[4] ||
                                                  (e[4] = function (t) {
                                                    return D.takeWin(0);
                                                  }),
                                                onStartAutoGame:
                                                  e[5] ||
                                                  (e[5] = function (t) {
                                                    return D.startAutoGame(0);
                                                  }),
                                                onStopAutoGame: D.stopAutoGame,
                                                prepareSumFunc: t.prepareSum,
                                                disabledMakeBet:
                                                  D.disabledMakeBet[0],
                                                disabledMakeMainBet:
                                                  D.disabledMakeMainBet[0],
                                              },
                                              null,
                                              8,
                                              [
                                                "modelValue",
                                                "onStopAutoGame",
                                                "prepareSumFunc",
                                                "disabledMakeBet",
                                                "disabledMakeMainBet",
                                              ]
                                            ),
                                            t.nextStageBetAlert.msg
                                              ? ((0, n.openBlock)(),
                                                (0, n.createElementBlock)(
                                                  "div",
                                                  {
                                                    key: 0,
                                                    class: (0,
                                                    n.normalizeClass)([
                                                      {
                                                        "crash-bet-info--is-error":
                                                          t.nextStageBetAlert
                                                            .isError,
                                                      },
                                                      "crash-bet__info crash-bet-info",
                                                    ]),
                                                  },
                                                  [
                                                    (0, n.createElementVNode)(
                                                      "span",
                                                      P,
                                                      (0, n.toDisplayString)(
                                                        t.nextStageBetAlert.msg
                                                      ),
                                                      1
                                                    ),
                                                  ],
                                                  2
                                                ))
                                              : (0, n.createCommentVNode)(
                                                  "",
                                                  !0
                                                ),
                                          ],
                                          64
                                        )),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                    (0, n.createVNode)(
                      n.Transition,
                      { name: "games-fade" },
                      {
                        default: (0, n.withCtx)(function () {
                          return [
                            j.showAutoGamePopup
                              ? ((0, n.openBlock)(),
                                (0, n.createBlock)(
                                  $,
                                  {
                                    key: 0,
                                    onClose: D.closeAutoGamePopup,
                                    onStartGame: D.startAutoGame,
                                    prepareSumFunc: t.prepareSum,
                                    betIndex: j.currentAutoBetIndex,
                                    showErrorInfo: j.showErrorInfo,
                                    errorInfo: j.autobetErrorInfo,
                                  },
                                  null,
                                  8,
                                  [
                                    "onClose",
                                    "onStartGame",
                                    "prepareSumFunc",
                                    "betIndex",
                                    "showErrorInfo",
                                    "errorInfo",
                                  ]
                                ))
                              : (0, n.createCommentVNode)("", !0),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                  ],
                  8,
                  o
                )
              );
            },
          ],
        ]);
    },
    45031050: (t, e, r) => {
      "use strict";
      var n = r(6295189),
        o = r(71858391),
        i = TypeError;
      t.exports = function (t) {
        if (n(t)) return t;
        throw new i(o(t) + " is not a function");
      };
    },
    11291772: (t, e, r) => {
      "use strict";
      var n = r(87487757),
        o = r(71858391),
        i = TypeError;
      t.exports = function (t) {
        if (n(t)) return t;
        throw new i(o(t) + " is not a constructor");
      };
    },
    53262658: (t, e, r) => {
      "use strict";
      var n = r(58565029),
        o = String,
        i = TypeError;
      t.exports = function (t) {
        if (n(t)) return t;
        throw new i("Can't set " + o(t) + " as a prototype");
      };
    },
    25798213: (t, e, r) => {
      "use strict";
      var n = r(62248275),
        o = r(4546008),
        i = r(64767377).f,
        a = n("unscopables"),
        s = Array.prototype;
      void 0 === s[a] && i(s, a, { configurable: !0, value: o(null) }),
        (t.exports = function (t) {
          s[a][t] = !0;
        });
    },
    89301573: (t, e, r) => {
      "use strict";
      var n = r(34745591).charAt;
      t.exports = function (t, e, r) {
        return e + (r ? n(t, e).length : 1);
      };
    },
    60144823: (t, e, r) => {
      "use strict";
      var n = r(43396857),
        o = TypeError;
      t.exports = function (t, e) {
        if (n(e, t)) return t;
        throw new o("Incorrect invocation");
      };
    },
    32189351: (t, e, r) => {
      "use strict";
      var n = r(75849826),
        o = String,
        i = TypeError;
      t.exports = function (t) {
        if (n(t)) return t;
        throw new i(o(t) + " is not an object");
      };
    },
    9209828: (t, e, r) => {
      "use strict";
      var n = r(17964319);
      t.exports = n(function () {
        if ("function" == typeof ArrayBuffer) {
          var t = new ArrayBuffer(8);
          Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 });
        }
      });
    },
    89176283: (t, e, r) => {
      "use strict";
      var n = r(39485517).forEach,
        o = r(5841222)("forEach");
      t.exports = o
        ? [].forEach
        : function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
    },
    36473372: (t, e, r) => {
      "use strict";
      var n = r(22662608),
        o = r(82185277),
        i = r(39045557),
        a = r(32010847),
        s = r(8703953),
        c = r(87487757),
        u = r(7793558),
        l = r(74893328),
        p = r(3140833),
        f = r(29931715),
        h = Array;
      t.exports = function (t) {
        var e = i(t),
          r = c(this),
          d = arguments.length,
          m = d > 1 ? arguments[1] : void 0,
          v = void 0 !== m;
        v && (m = n(m, d > 2 ? arguments[2] : void 0));
        var b,
          y,
          g,
          _,
          S,
          w,
          A = f(e),
          E = 0;
        if (!A || (this === h && s(A)))
          for (b = u(e), y = r ? new this(b) : h(b); b > E; E++)
            (w = v ? m(e[E], E) : e[E]), l(y, E, w);
        else
          for (
            y = r ? new this() : [], S = (_ = p(e, A)).next;
            !(g = o(S, _)).done;
            E++
          )
            (w = v ? a(_, m, [g.value, E], !0) : g.value), l(y, E, w);
        return (y.length = E), y;
      };
    },
    3239681: (t, e, r) => {
      "use strict";
      var n = r(86022357),
        o = r(34897786),
        i = r(7793558),
        a = function (t) {
          return function (e, r, a) {
            var s = n(e),
              c = i(s);
            if (0 === c) return !t && -1;
            var u,
              l = o(a, c);
            if (t && r != r) {
              for (; c > l; ) if ((u = s[l++]) != u) return !0;
            } else
              for (; c > l; l++)
                if ((t || l in s) && s[l] === r) return t || l || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: a(!0), indexOf: a(!1) };
    },
    39485517: (t, e, r) => {
      "use strict";
      var n = r(22662608),
        o = r(92746832),
        i = r(85687055),
        a = r(39045557),
        s = r(7793558),
        c = r(86282333),
        u = o([].push),
        l = function (t) {
          var e = 1 === t,
            r = 2 === t,
            o = 3 === t,
            l = 4 === t,
            p = 6 === t,
            f = 7 === t,
            h = 5 === t || p;
          return function (d, m, v, b) {
            for (
              var y,
                g,
                _ = a(d),
                S = i(_),
                w = s(S),
                A = n(m, v),
                E = 0,
                B = b || c,
                x = e ? B(d, w) : r || f ? B(d, 0) : void 0;
              w > E;
              E++
            )
              if ((h || E in S) && ((g = A((y = S[E]), E, _)), t))
                if (e) x[E] = g;
                else if (g)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return y;
                    case 6:
                      return E;
                    case 2:
                      u(x, y);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      u(x, y);
                  }
            return p ? -1 : o || l ? l : x;
          };
        };
      t.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6),
        filterReject: l(7),
      };
    },
    46921189: (t, e, r) => {
      "use strict";
      var n = r(17964319),
        o = r(62248275),
        i = r(19678175),
        a = o("species");
      t.exports = function (t) {
        return (
          i >= 51 ||
          !n(function () {
            var e = [];
            return (
              ((e.constructor = {})[a] = function () {
                return { foo: 1 };
              }),
              1 !== e[t](Boolean).foo
            );
          })
        );
      };
    },
    5841222: (t, e, r) => {
      "use strict";
      var n = r(17964319);
      t.exports = function (t, e) {
        var r = [][t];
        return (
          !!r &&
          n(function () {
            r.call(
              null,
              e ||
                function () {
                  return 1;
                },
              1
            );
          })
        );
      };
    },
    47667518: (t, e, r) => {
      "use strict";
      var n = r(45031050),
        o = r(39045557),
        i = r(85687055),
        a = r(7793558),
        s = TypeError,
        c = "Reduce of empty array with no initial value",
        u = function (t) {
          return function (e, r, u, l) {
            var p = o(e),
              f = i(p),
              h = a(p);
            if ((n(r), 0 === h && u < 2)) throw new s(c);
            var d = t ? h - 1 : 0,
              m = t ? -1 : 1;
            if (u < 2)
              for (;;) {
                if (d in f) {
                  (l = f[d]), (d += m);
                  break;
                }
                if (((d += m), t ? d < 0 : h <= d)) throw new s(c);
              }
            for (; t ? d >= 0 : h > d; d += m) d in f && (l = r(l, f[d], d, p));
            return l;
          };
        };
      t.exports = { left: u(!1), right: u(!0) };
    },
    24509983: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(99195304),
        i = TypeError,
        a = Object.getOwnPropertyDescriptor,
        s =
          n &&
          !(function () {
            if (void 0 !== this) return !0;
            try {
              Object.defineProperty([], "length", { writable: !1 }).length = 1;
            } catch (t) {
              return t instanceof TypeError;
            }
          })();
      t.exports = s
        ? function (t, e) {
            if (o(t) && !a(t, "length").writable)
              throw new i("Cannot set read only .length");
            return (t.length = e);
          }
        : function (t, e) {
            return (t.length = e);
          };
    },
    28654784: (t, e, r) => {
      "use strict";
      var n = r(92746832);
      t.exports = n([].slice);
    },
    88769624: (t, e, r) => {
      "use strict";
      var n = r(28654784),
        o = Math.floor,
        i = function (t, e) {
          var r = t.length;
          if (r < 8)
            for (var a, s, c = 1; c < r; ) {
              for (s = c, a = t[c]; s && e(t[s - 1], a) > 0; ) t[s] = t[--s];
              s !== c++ && (t[s] = a);
            }
          else
            for (
              var u = o(r / 2),
                l = i(n(t, 0, u), e),
                p = i(n(t, u), e),
                f = l.length,
                h = p.length,
                d = 0,
                m = 0;
              d < f || m < h;

            )
              t[d + m] =
                d < f && m < h
                  ? e(l[d], p[m]) <= 0
                    ? l[d++]
                    : p[m++]
                  : d < f
                  ? l[d++]
                  : p[m++];
          return t;
        };
      t.exports = i;
    },
    9859081: (t, e, r) => {
      "use strict";
      var n = r(99195304),
        o = r(87487757),
        i = r(75849826),
        a = r(62248275)("species"),
        s = Array;
      t.exports = function (t) {
        var e;
        return (
          n(t) &&
            ((e = t.constructor),
            ((o(e) && (e === s || n(e.prototype))) ||
              (i(e) && null === (e = e[a]))) &&
              (e = void 0)),
          void 0 === e ? s : e
        );
      };
    },
    86282333: (t, e, r) => {
      "use strict";
      var n = r(9859081);
      t.exports = function (t, e) {
        return new (n(t))(0 === e ? 0 : e);
      };
    },
    32010847: (t, e, r) => {
      "use strict";
      var n = r(32189351),
        o = r(3539779);
      t.exports = function (t, e, r, i) {
        try {
          return i ? e(n(r)[0], r[1]) : e(r);
        } catch (a) {
          o(t, "throw", a);
        }
      };
    },
    90871788: (t, e, r) => {
      "use strict";
      var n = r(62248275)("iterator"),
        o = !1;
      try {
        var i = 0,
          a = {
            next: function () {
              return { done: !!i++ };
            },
            return: function () {
              o = !0;
            },
          };
        (a[n] = function () {
          return this;
        }),
          Array.from(a, function () {
            throw 2;
          });
      } catch (s) {}
      t.exports = function (t, e) {
        try {
          if (!e && !o) return !1;
        } catch (s) {
          return !1;
        }
        var r = !1;
        try {
          var i = {};
          (i[n] = function () {
            return {
              next: function () {
                return { done: (r = !0) };
              },
            };
          }),
            t(i);
        } catch (s) {}
        return r;
      };
    },
    91206336: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = n({}.toString),
        i = n("".slice);
      t.exports = function (t) {
        return i(o(t), 8, -1);
      };
    },
    15357275: (t, e, r) => {
      "use strict";
      var n = r(10578092),
        o = r(6295189),
        i = r(91206336),
        a = r(62248275)("toStringTag"),
        s = Object,
        c =
          "Arguments" ===
          i(
            (function () {
              return arguments;
            })()
          );
      t.exports = n
        ? i
        : function (t) {
            var e, r, n;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (r = (function (t, e) {
                  try {
                    return t[e];
                  } catch (r) {}
                })((e = s(t)), a))
              ? r
              : c
              ? i(e)
              : "Object" === (n = i(e)) && o(e.callee)
              ? "Arguments"
              : n;
          };
    },
    25529914: (t, e, r) => {
      "use strict";
      var n = r(4546008),
        o = r(83560634),
        i = r(34507415),
        a = r(22662608),
        s = r(60144823),
        c = r(63139477),
        u = r(66670348),
        l = r(41197328),
        p = r(71577793),
        f = r(21172241),
        h = r(97881036),
        d = r(96734235).fastKey,
        m = r(71814253),
        v = m.set,
        b = m.getterFor;
      t.exports = {
        getConstructor: function (t, e, r, l) {
          var p = t(function (t, o) {
              s(t, f),
                v(t, {
                  type: e,
                  index: n(null),
                  first: null,
                  last: null,
                  size: 0,
                }),
                h || (t.size = 0),
                c(o) || u(o, t[l], { that: t, AS_ENTRIES: r });
            }),
            f = p.prototype,
            m = b(e),
            y = function (t, e, r) {
              var n,
                o,
                i = m(t),
                a = g(t, e);
              return (
                a
                  ? (a.value = r)
                  : ((i.last = a =
                      {
                        index: (o = d(e, !0)),
                        key: e,
                        value: r,
                        previous: (n = i.last),
                        next: null,
                        removed: !1,
                      }),
                    i.first || (i.first = a),
                    n && (n.next = a),
                    h ? i.size++ : t.size++,
                    "F" !== o && (i.index[o] = a)),
                t
              );
            },
            g = function (t, e) {
              var r,
                n = m(t),
                o = d(e);
              if ("F" !== o) return n.index[o];
              for (r = n.first; r; r = r.next) if (r.key === e) return r;
            };
          return (
            i(f, {
              clear: function () {
                for (var t = m(this), e = t.first; e; )
                  (e.removed = !0),
                    e.previous && (e.previous = e.previous.next = null),
                    (e = e.next);
                (t.first = t.last = null),
                  (t.index = n(null)),
                  h ? (t.size = 0) : (this.size = 0);
              },
              delete: function (t) {
                var e = this,
                  r = m(e),
                  n = g(e, t);
                if (n) {
                  var o = n.next,
                    i = n.previous;
                  delete r.index[n.index],
                    (n.removed = !0),
                    i && (i.next = o),
                    o && (o.previous = i),
                    r.first === n && (r.first = o),
                    r.last === n && (r.last = i),
                    h ? r.size-- : e.size--;
                }
                return !!n;
              },
              forEach: function (t) {
                for (
                  var e,
                    r = m(this),
                    n = a(t, arguments.length > 1 ? arguments[1] : void 0);
                  (e = e ? e.next : r.first);

                )
                  for (n(e.value, e.key, this); e && e.removed; )
                    e = e.previous;
              },
              has: function (t) {
                return !!g(this, t);
              },
            }),
            i(
              f,
              r
                ? {
                    get: function (t) {
                      var e = g(this, t);
                      return e && e.value;
                    },
                    set: function (t, e) {
                      return y(this, 0 === t ? 0 : t, e);
                    },
                  }
                : {
                    add: function (t) {
                      return y(this, (t = 0 === t ? 0 : t), t);
                    },
                  }
            ),
            h &&
              o(f, "size", {
                configurable: !0,
                get: function () {
                  return m(this).size;
                },
              }),
            p
          );
        },
        setStrong: function (t, e, r) {
          var n = e + " Iterator",
            o = b(e),
            i = b(n);
          l(
            t,
            e,
            function (t, e) {
              v(this, { type: n, target: t, state: o(t), kind: e, last: null });
            },
            function () {
              for (var t = i(this), e = t.kind, r = t.last; r && r.removed; )
                r = r.previous;
              return t.target && (t.last = r = r ? r.next : t.state.first)
                ? p(
                    "keys" === e
                      ? r.key
                      : "values" === e
                      ? r.value
                      : [r.key, r.value],
                    !1
                  )
                : ((t.target = null), p(void 0, !0));
            },
            r ? "entries" : "values",
            !r,
            !0
          ),
            f(e);
        },
      };
    },
    46948980: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(95619008),
        i = r(92746832),
        a = r(59117244),
        s = r(17917960),
        c = r(96734235),
        u = r(66670348),
        l = r(60144823),
        p = r(6295189),
        f = r(63139477),
        h = r(75849826),
        d = r(17964319),
        m = r(90871788),
        v = r(73627903),
        b = r(14531263);
      t.exports = function (t, e, r) {
        var y = -1 !== t.indexOf("Map"),
          g = -1 !== t.indexOf("Weak"),
          _ = y ? "set" : "add",
          S = o[t],
          w = S && S.prototype,
          A = S,
          E = {},
          B = function (t) {
            var e = i(w[t]);
            s(
              w,
              t,
              "add" === t
                ? function (t) {
                    return e(this, 0 === t ? 0 : t), this;
                  }
                : "delete" === t
                ? function (t) {
                    return !(g && !h(t)) && e(this, 0 === t ? 0 : t);
                  }
                : "get" === t
                ? function (t) {
                    return g && !h(t) ? void 0 : e(this, 0 === t ? 0 : t);
                  }
                : "has" === t
                ? function (t) {
                    return !(g && !h(t)) && e(this, 0 === t ? 0 : t);
                  }
                : function (t, r) {
                    return e(this, 0 === t ? 0 : t, r), this;
                  }
            );
          };
        if (
          a(
            t,
            !p(S) ||
              !(
                g ||
                (w.forEach &&
                  !d(function () {
                    new S().entries().next();
                  }))
              )
          )
        )
          (A = r.getConstructor(e, t, y, _)), c.enable();
        else if (a(t, !0)) {
          var x = new A(),
            O = x[_](g ? {} : -0, 1) !== x,
            k = d(function () {
              x.has(1);
            }),
            I = m(function (t) {
              new S(t);
            }),
            C =
              !g &&
              d(function () {
                for (var t = new S(), e = 5; e--; ) t[_](e, e);
                return !t.has(-0);
              });
          I ||
            (((A = e(function (t, e) {
              l(t, w);
              var r = b(new S(), t, A);
              return f(e) || u(e, r[_], { that: r, AS_ENTRIES: y }), r;
            })).prototype = w),
            (w.constructor = A)),
            (k || C) && (B("delete"), B("has"), y && B("get")),
            (C || O) && B(_),
            g && w.clear && delete w.clear;
        }
        return (
          (E[t] = A),
          n({ global: !0, constructor: !0, forced: A !== S }, E),
          v(A, t),
          g || r.setStrong(A, t, y),
          A
        );
      };
    },
    87344268: (t, e, r) => {
      "use strict";
      var n = r(26847425),
        o = r(59264791),
        i = r(37441603),
        a = r(64767377);
      t.exports = function (t, e, r) {
        for (var s = o(e), c = a.f, u = i.f, l = 0; l < s.length; l++) {
          var p = s[l];
          n(t, p) || (r && n(r, p)) || c(t, p, u(e, p));
        }
      };
    },
    1691452: (t, e, r) => {
      "use strict";
      var n = r(62248275)("match");
      t.exports = function (t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (r) {
          try {
            return (e[n] = !1), "/./"[t](e);
          } catch (o) {}
        }
        return !1;
      };
    },
    92989875: (t, e, r) => {
      "use strict";
      var n = r(17964319);
      t.exports = !n(function () {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    71577793: (t) => {
      "use strict";
      t.exports = function (t, e) {
        return { value: t, done: e };
      };
    },
    24415083: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(64767377),
        i = r(71873636);
      t.exports = n
        ? function (t, e, r) {
            return o.f(t, e, i(1, r));
          }
        : function (t, e, r) {
            return (t[e] = r), t;
          };
    },
    71873636: (t) => {
      "use strict";
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    74893328: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(64767377),
        i = r(71873636);
      t.exports = function (t, e, r) {
        n ? o.f(t, e, i(0, r)) : (t[e] = r);
      };
    },
    31265256: (t, e, r) => {
      "use strict";
      var n = r(32189351),
        o = r(40008558),
        i = TypeError;
      t.exports = function (t) {
        if ((n(this), "string" === t || "default" === t)) t = "string";
        else if ("number" !== t) throw new i("Incorrect hint");
        return o(this, t);
      };
    },
    83560634: (t, e, r) => {
      "use strict";
      var n = r(66218731),
        o = r(64767377);
      t.exports = function (t, e, r) {
        return (
          r.get && n(r.get, e, { getter: !0 }),
          r.set && n(r.set, e, { setter: !0 }),
          o.f(t, e, r)
        );
      };
    },
    17917960: (t, e, r) => {
      "use strict";
      var n = r(6295189),
        o = r(64767377),
        i = r(66218731),
        a = r(48829257);
      t.exports = function (t, e, r, s) {
        s || (s = {});
        var c = s.enumerable,
          u = void 0 !== s.name ? s.name : e;
        if ((n(r) && i(r, u, s), s.global)) c ? (t[e] = r) : a(e, r);
        else {
          try {
            s.unsafe ? t[e] && (c = !0) : delete t[e];
          } catch (l) {}
          c
            ? (t[e] = r)
            : o.f(t, e, {
                value: r,
                enumerable: !1,
                configurable: !s.nonConfigurable,
                writable: !s.nonWritable,
              });
        }
        return t;
      };
    },
    34507415: (t, e, r) => {
      "use strict";
      var n = r(17917960);
      t.exports = function (t, e, r) {
        for (var o in e) n(t, o, e[o], r);
        return t;
      };
    },
    48829257: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = Object.defineProperty;
      t.exports = function (t, e) {
        try {
          o(n, t, { value: e, configurable: !0, writable: !0 });
        } catch (r) {
          n[t] = e;
        }
        return e;
      };
    },
    51345246: (t, e, r) => {
      "use strict";
      var n = r(71858391),
        o = TypeError;
      t.exports = function (t, e) {
        if (!delete t[e])
          throw new o("Cannot delete property " + n(e) + " of " + n(t));
      };
    },
    97881036: (t, e, r) => {
      "use strict";
      var n = r(17964319);
      t.exports = !n(function () {
        return (
          7 !==
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    64054231: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(75849826),
        i = n.document,
        a = o(i) && o(i.createElement);
      t.exports = function (t) {
        return a ? i.createElement(t) : {};
      };
    },
    68509637: (t) => {
      "use strict";
      var e = TypeError;
      t.exports = function (t) {
        if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
        return t;
      };
    },
    94191720: (t) => {
      "use strict";
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    44313248: (t, e, r) => {
      "use strict";
      var n = r(64054231)("span").classList,
        o = n && n.constructor && n.constructor.prototype;
      t.exports = o === Object.prototype ? void 0 : o;
    },
    6120855: (t) => {
      "use strict";
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    61687661: (t, e, r) => {
      "use strict";
      var n = r(39898839).match(/firefox\/(\d+)/i);
      t.exports = !!n && +n[1];
    },
    92792579: (t, e, r) => {
      "use strict";
      var n = r(39898839);
      t.exports = /MSIE|Trident/.test(n);
    },
    51660745: (t, e, r) => {
      "use strict";
      var n = r(39898839);
      t.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble;
    },
    73610120: (t, e, r) => {
      "use strict";
      var n = r(39898839);
      t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
    },
    61095617: (t, e, r) => {
      "use strict";
      var n = r(28494039);
      t.exports = "NODE" === n;
    },
    45343988: (t, e, r) => {
      "use strict";
      var n = r(39898839);
      t.exports = /web0s(?!.*chrome)/i.test(n);
    },
    39898839: (t, e, r) => {
      "use strict";
      var n = r(95619008).navigator,
        o = n && n.userAgent;
      t.exports = o ? String(o) : "";
    },
    19678175: (t, e, r) => {
      "use strict";
      var n,
        o,
        i = r(95619008),
        a = r(39898839),
        s = i.process,
        c = i.Deno,
        u = (s && s.versions) || (c && c.version),
        l = u && u.v8;
      l && (o = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
        !o &&
          a &&
          (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
          (n = a.match(/Chrome\/(\d+)/)) &&
          (o = +n[1]),
        (t.exports = o);
    },
    78614711: (t, e, r) => {
      "use strict";
      var n = r(39898839).match(/AppleWebKit\/(\d+)\./);
      t.exports = !!n && +n[1];
    },
    28494039: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(39898839),
        i = r(91206336),
        a = function (t) {
          return o.slice(0, t.length) === t;
        };
      t.exports = a("Bun/")
        ? "BUN"
        : a("Cloudflare-Workers")
        ? "CLOUDFLARE"
        : a("Deno/")
        ? "DENO"
        : a("Node.js/")
        ? "NODE"
        : n.Bun && "string" == typeof Bun.version
        ? "BUN"
        : n.Deno && "object" == typeof Deno.version
        ? "DENO"
        : "process" === i(n.process)
        ? "NODE"
        : n.window && n.document
        ? "BROWSER"
        : "REST";
    },
    88844257: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = Error,
        i = n("".replace),
        a = String(new o("zxcasd").stack),
        s = /\n\s*at [^:]*:[^\n]*/,
        c = s.test(a);
      t.exports = function (t, e) {
        if (c && "string" == typeof t && !o.prepareStackTrace)
          for (; e--; ) t = i(t, s, "");
        return t;
      };
    },
    72786283: (t, e, r) => {
      "use strict";
      var n = r(24415083),
        o = r(88844257),
        i = r(61063027),
        a = Error.captureStackTrace;
      t.exports = function (t, e, r, s) {
        i && (a ? a(t, e) : n(t, "stack", o(r, s)));
      };
    },
    61063027: (t, e, r) => {
      "use strict";
      var n = r(17964319),
        o = r(71873636);
      t.exports = !n(function () {
        var t = new Error("a");
        return (
          !("stack" in t) ||
          (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack)
        );
      });
    },
    33084182: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(37441603).f,
        i = r(24415083),
        a = r(17917960),
        s = r(48829257),
        c = r(87344268),
        u = r(59117244);
      t.exports = function (t, e) {
        var r,
          l,
          p,
          f,
          h,
          d = t.target,
          m = t.global,
          v = t.stat;
        if ((r = m ? n : v ? n[d] || s(d, {}) : n[d] && n[d].prototype))
          for (l in e) {
            if (
              ((f = e[l]),
              (p = t.dontCallGetSet ? (h = o(r, l)) && h.value : r[l]),
              !u(m ? l : d + (v ? "." : "#") + l, t.forced) && void 0 !== p)
            ) {
              if (typeof f == typeof p) continue;
              c(f, p);
            }
            (t.sham || (p && p.sham)) && i(f, "sham", !0), a(r, l, f, t);
          }
      };
    },
    17964319: (t) => {
      "use strict";
      t.exports = function (t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    96355468: (t, e, r) => {
      "use strict";
      r(47138695);
      var n = r(82185277),
        o = r(17917960),
        i = r(35761195),
        a = r(17964319),
        s = r(62248275),
        c = r(24415083),
        u = s("species"),
        l = RegExp.prototype;
      t.exports = function (t, e, r, p) {
        var f = s(t),
          h = !a(function () {
            var e = {};
            return (
              (e[f] = function () {
                return 7;
              }),
              7 !== ""[t](e)
            );
          }),
          d =
            h &&
            !a(function () {
              var e = !1,
                r = /a/;
              return (
                "split" === t &&
                  (((r = {}).constructor = {}),
                  (r.constructor[u] = function () {
                    return r;
                  }),
                  (r.flags = ""),
                  (r[f] = /./[f])),
                (r.exec = function () {
                  return (e = !0), null;
                }),
                r[f](""),
                !e
              );
            });
        if (!h || !d || r) {
          var m = /./[f],
            v = e(f, ""[t], function (t, e, r, o, a) {
              var s = e.exec;
              return s === i || s === l.exec
                ? h && !a
                  ? { done: !0, value: n(m, e, r, o) }
                  : { done: !0, value: n(t, r, e, o) }
                : { done: !1 };
            });
          o(String.prototype, t, v[0]), o(l, f, v[1]);
        }
        p && c(l[f], "sham", !0);
      };
    },
    5540776: (t, e, r) => {
      "use strict";
      var n = r(17964319);
      t.exports = !n(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    12020825: (t, e, r) => {
      "use strict";
      var n = r(1436072),
        o = Function.prototype,
        i = o.apply,
        a = o.call;
      t.exports =
        ("object" == typeof Reflect && Reflect.apply) ||
        (n
          ? a.bind(i)
          : function () {
              return a.apply(i, arguments);
            });
    },
    22662608: (t, e, r) => {
      "use strict";
      var n = r(54892980),
        o = r(45031050),
        i = r(1436072),
        a = n(n.bind);
      t.exports = function (t, e) {
        return (
          o(t),
          void 0 === e
            ? t
            : i
            ? a(t, e)
            : function () {
                return t.apply(e, arguments);
              }
        );
      };
    },
    1436072: (t, e, r) => {
      "use strict";
      var n = r(17964319);
      t.exports = !n(function () {
        var t = function () {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype");
      });
    },
    82185277: (t, e, r) => {
      "use strict";
      var n = r(1436072),
        o = Function.prototype.call;
      t.exports = n
        ? o.bind(o)
        : function () {
            return o.apply(o, arguments);
          };
    },
    63398638: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(26847425),
        i = Function.prototype,
        a = n && Object.getOwnPropertyDescriptor,
        s = o(i, "name"),
        c = s && "something" === function () {}.name,
        u = s && (!n || (n && a(i, "name").configurable));
      t.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: u };
    },
    3670610: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(45031050);
      t.exports = function (t, e, r) {
        try {
          return n(o(Object.getOwnPropertyDescriptor(t, e)[r]));
        } catch (i) {}
      };
    },
    54892980: (t, e, r) => {
      "use strict";
      var n = r(91206336),
        o = r(92746832);
      t.exports = function (t) {
        if ("Function" === n(t)) return o(t);
      };
    },
    92746832: (t, e, r) => {
      "use strict";
      var n = r(1436072),
        o = Function.prototype,
        i = o.call,
        a = n && o.bind.bind(i, i);
      t.exports = n
        ? a
        : function (t) {
            return function () {
              return i.apply(t, arguments);
            };
          };
    },
    60033783: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(6295189);
      t.exports = function (t, e) {
        return arguments.length < 2
          ? ((r = n[t]), o(r) ? r : void 0)
          : n[t] && n[t][e];
        var r;
      };
    },
    43259527: (t) => {
      "use strict";
      t.exports = function (t) {
        return { iterator: t, next: t.next, done: !1 };
      };
    },
    29931715: (t, e, r) => {
      "use strict";
      var n = r(15357275),
        o = r(71242462),
        i = r(63139477),
        a = r(84511133),
        s = r(62248275)("iterator");
      t.exports = function (t) {
        if (!i(t)) return o(t, s) || o(t, "@@iterator") || a[n(t)];
      };
    },
    3140833: (t, e, r) => {
      "use strict";
      var n = r(82185277),
        o = r(45031050),
        i = r(32189351),
        a = r(71858391),
        s = r(29931715),
        c = TypeError;
      t.exports = function (t, e) {
        var r = arguments.length < 2 ? s(t) : e;
        if (o(r)) return i(n(r, t));
        throw new c(a(t) + " is not iterable");
      };
    },
    65216565: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(99195304),
        i = r(6295189),
        a = r(91206336),
        s = r(31678159),
        c = n([].push);
      t.exports = function (t) {
        if (i(t)) return t;
        if (o(t)) {
          for (var e = t.length, r = [], n = 0; n < e; n++) {
            var u = t[n];
            "string" == typeof u
              ? c(r, u)
              : ("number" != typeof u &&
                  "Number" !== a(u) &&
                  "String" !== a(u)) ||
                c(r, s(u));
          }
          var l = r.length,
            p = !0;
          return function (t, e) {
            if (p) return (p = !1), e;
            if (o(this)) return e;
            for (var n = 0; n < l; n++) if (r[n] === t) return e;
          };
        }
      };
    },
    71242462: (t, e, r) => {
      "use strict";
      var n = r(45031050),
        o = r(63139477);
      t.exports = function (t, e) {
        var r = t[e];
        return o(r) ? void 0 : n(r);
      };
    },
    18610286: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(39045557),
        i = Math.floor,
        a = n("".charAt),
        s = n("".replace),
        c = n("".slice),
        u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        l = /\$([$&'`]|\d{1,2})/g;
      t.exports = function (t, e, r, n, p, f) {
        var h = r + t.length,
          d = n.length,
          m = l;
        return (
          void 0 !== p && ((p = o(p)), (m = u)),
          s(f, m, function (o, s) {
            var u;
            switch (a(s, 0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return c(e, 0, r);
              case "'":
                return c(e, h);
              case "<":
                u = p[c(s, 1, -1)];
                break;
              default:
                var l = +s;
                if (0 === l) return o;
                if (l > d) {
                  var f = i(l / 10);
                  return 0 === f
                    ? o
                    : f <= d
                    ? void 0 === n[f - 1]
                      ? a(s, 1)
                      : n[f - 1] + a(s, 1)
                    : o;
                }
                u = n[l - 1];
            }
            return void 0 === u ? "" : u;
          })
        );
      };
    },
    95619008: function (t, e, r) {
      "use strict";
      var n = function (t) {
        return t && t.Math === Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof r.g && r.g) ||
        n("object" == typeof this && this) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    },
    26847425: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(39045557),
        i = n({}.hasOwnProperty);
      t.exports =
        Object.hasOwn ||
        function (t, e) {
          return i(o(t), e);
        };
    },
    13101749: (t) => {
      "use strict";
      t.exports = {};
    },
    39187301: (t) => {
      "use strict";
      t.exports = function (t, e) {
        try {
          1 === arguments.length ? console.error(t) : console.error(t, e);
        } catch (r) {}
      };
    },
    41127437: (t, e, r) => {
      "use strict";
      var n = r(60033783);
      t.exports = n("document", "documentElement");
    },
    79302765: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(17964319),
        i = r(64054231);
      t.exports =
        !n &&
        !o(function () {
          return (
            7 !==
            Object.defineProperty(i("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    85687055: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(17964319),
        i = r(91206336),
        a = Object,
        s = n("".split);
      t.exports = o(function () {
        return !a("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" === i(t) ? s(t, "") : a(t);
          }
        : a;
    },
    14531263: (t, e, r) => {
      "use strict";
      var n = r(6295189),
        o = r(75849826),
        i = r(15245319);
      t.exports = function (t, e, r) {
        var a, s;
        return (
          i &&
            n((a = e.constructor)) &&
            a !== r &&
            o((s = a.prototype)) &&
            s !== r.prototype &&
            i(t, s),
          t
        );
      };
    },
    85622122: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(6295189),
        i = r(7866109),
        a = n(Function.toString);
      o(i.inspectSource) ||
        (i.inspectSource = function (t) {
          return a(t);
        }),
        (t.exports = i.inspectSource);
    },
    88736976: (t, e, r) => {
      "use strict";
      var n = r(75849826),
        o = r(24415083);
      t.exports = function (t, e) {
        n(e) && "cause" in e && o(t, "cause", e.cause);
      };
    },
    96734235: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(92746832),
        i = r(13101749),
        a = r(75849826),
        s = r(26847425),
        c = r(64767377).f,
        u = r(61698288),
        l = r(48290746),
        p = r(61909644),
        f = r(7593520),
        h = r(5540776),
        d = !1,
        m = f("meta"),
        v = 0,
        b = function (t) {
          c(t, m, { value: { objectID: "O" + v++, weakData: {} } });
        },
        y = (t.exports = {
          enable: function () {
            (y.enable = function () {}), (d = !0);
            var t = u.f,
              e = o([].splice),
              r = {};
            (r[m] = 1),
              t(r).length &&
                ((u.f = function (r) {
                  for (var n = t(r), o = 0, i = n.length; o < i; o++)
                    if (n[o] === m) {
                      e(n, o, 1);
                      break;
                    }
                  return n;
                }),
                n(
                  { target: "Object", stat: !0, forced: !0 },
                  { getOwnPropertyNames: l.f }
                ));
          },
          fastKey: function (t, e) {
            if (!a(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!s(t, m)) {
              if (!p(t)) return "F";
              if (!e) return "E";
              b(t);
            }
            return t[m].objectID;
          },
          getWeakData: function (t, e) {
            if (!s(t, m)) {
              if (!p(t)) return !0;
              if (!e) return !1;
              b(t);
            }
            return t[m].weakData;
          },
          onFreeze: function (t) {
            return h && d && p(t) && !s(t, m) && b(t), t;
          },
        });
      i[m] = !0;
    },
    71814253: (t, e, r) => {
      "use strict";
      var n,
        o,
        i,
        a = r(34850366),
        s = r(95619008),
        c = r(75849826),
        u = r(24415083),
        l = r(26847425),
        p = r(7866109),
        f = r(64510599),
        h = r(13101749),
        d = "Object already initialized",
        m = s.TypeError,
        v = s.WeakMap;
      if (a || p.state) {
        var b = p.state || (p.state = new v());
        (b.get = b.get),
          (b.has = b.has),
          (b.set = b.set),
          (n = function (t, e) {
            if (b.has(t)) throw new m(d);
            return (e.facade = t), b.set(t, e), e;
          }),
          (o = function (t) {
            return b.get(t) || {};
          }),
          (i = function (t) {
            return b.has(t);
          });
      } else {
        var y = f("state");
        (h[y] = !0),
          (n = function (t, e) {
            if (l(t, y)) throw new m(d);
            return (e.facade = t), u(t, y, e), e;
          }),
          (o = function (t) {
            return l(t, y) ? t[y] : {};
          }),
          (i = function (t) {
            return l(t, y);
          });
      }
      t.exports = {
        set: n,
        get: o,
        has: i,
        enforce: function (t) {
          return i(t) ? o(t) : n(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var r;
            if (!c(e) || (r = o(e)).type !== t)
              throw new m("Incompatible receiver, " + t + " required");
            return r;
          };
        },
      };
    },
    8703953: (t, e, r) => {
      "use strict";
      var n = r(62248275),
        o = r(84511133),
        i = n("iterator"),
        a = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (o.Array === t || a[i] === t);
      };
    },
    99195304: (t, e, r) => {
      "use strict";
      var n = r(91206336);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" === n(t);
        };
    },
    6295189: (t) => {
      "use strict";
      var e = "object" == typeof document && document.all;
      t.exports =
        void 0 === e && void 0 !== e
          ? function (t) {
              return "function" == typeof t || t === e;
            }
          : function (t) {
              return "function" == typeof t;
            };
    },
    87487757: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(17964319),
        i = r(6295189),
        a = r(15357275),
        s = r(60033783),
        c = r(85622122),
        u = function () {},
        l = s("Reflect", "construct"),
        p = /^\s*(?:class|function)\b/,
        f = n(p.exec),
        h = !p.test(u),
        d = function (t) {
          if (!i(t)) return !1;
          try {
            return l(u, [], t), !0;
          } catch (e) {
            return !1;
          }
        },
        m = function (t) {
          if (!i(t)) return !1;
          switch (a(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return h || !!f(p, c(t));
          } catch (e) {
            return !0;
          }
        };
      (m.sham = !0),
        (t.exports =
          !l ||
          o(function () {
            var t;
            return (
              d(d.call) ||
              !d(Object) ||
              !d(function () {
                t = !0;
              }) ||
              t
            );
          })
            ? m
            : d);
    },
    59117244: (t, e, r) => {
      "use strict";
      var n = r(17964319),
        o = r(6295189),
        i = /#|\.prototype\./,
        a = function (t, e) {
          var r = c[s(t)];
          return r === l || (r !== u && (o(e) ? n(e) : !!e));
        },
        s = (a.normalize = function (t) {
          return String(t).replace(i, ".").toLowerCase();
        }),
        c = (a.data = {}),
        u = (a.NATIVE = "N"),
        l = (a.POLYFILL = "P");
      t.exports = a;
    },
    63139477: (t) => {
      "use strict";
      t.exports = function (t) {
        return null == t;
      };
    },
    75849826: (t, e, r) => {
      "use strict";
      var n = r(6295189);
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : n(t);
      };
    },
    58565029: (t, e, r) => {
      "use strict";
      var n = r(75849826);
      t.exports = function (t) {
        return n(t) || null === t;
      };
    },
    13599787: (t) => {
      "use strict";
      t.exports = !1;
    },
    22576084: (t, e, r) => {
      "use strict";
      var n = r(75849826),
        o = r(91206336),
        i = r(62248275)("match");
      t.exports = function (t) {
        var e;
        return n(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" === o(t));
      };
    },
    93988325: (t, e, r) => {
      "use strict";
      var n = r(60033783),
        o = r(6295189),
        i = r(43396857),
        a = r(50520448),
        s = Object;
      t.exports = a
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            var e = n("Symbol");
            return o(e) && i(e.prototype, s(t));
          };
    },
    66670348: (t, e, r) => {
      "use strict";
      var n = r(22662608),
        o = r(82185277),
        i = r(32189351),
        a = r(71858391),
        s = r(8703953),
        c = r(7793558),
        u = r(43396857),
        l = r(3140833),
        p = r(29931715),
        f = r(3539779),
        h = TypeError,
        d = function (t, e) {
          (this.stopped = t), (this.result = e);
        },
        m = d.prototype;
      t.exports = function (t, e, r) {
        var v,
          b,
          y,
          g,
          _,
          S,
          w,
          A = r && r.that,
          E = !(!r || !r.AS_ENTRIES),
          B = !(!r || !r.IS_RECORD),
          x = !(!r || !r.IS_ITERATOR),
          O = !(!r || !r.INTERRUPTED),
          k = n(e, A),
          I = function (t) {
            return v && f(v, "normal", t), new d(!0, t);
          },
          C = function (t) {
            return E
              ? (i(t), O ? k(t[0], t[1], I) : k(t[0], t[1]))
              : O
              ? k(t, I)
              : k(t);
          };
        if (B) v = t.iterator;
        else if (x) v = t;
        else {
          if (!(b = p(t))) throw new h(a(t) + " is not iterable");
          if (s(b)) {
            for (y = 0, g = c(t); g > y; y++)
              if ((_ = C(t[y])) && u(m, _)) return _;
            return new d(!1);
          }
          v = l(t, b);
        }
        for (S = B ? t.next : v.next; !(w = o(S, v)).done; ) {
          try {
            _ = C(w.value);
          } catch (N) {
            f(v, "throw", N);
          }
          if ("object" == typeof _ && _ && u(m, _)) return _;
        }
        return new d(!1);
      };
    },
    3539779: (t, e, r) => {
      "use strict";
      var n = r(82185277),
        o = r(32189351),
        i = r(71242462);
      t.exports = function (t, e, r) {
        var a, s;
        o(t);
        try {
          if (!(a = i(t, "return"))) {
            if ("throw" === e) throw r;
            return r;
          }
          a = n(a, t);
        } catch (c) {
          (s = !0), (a = c);
        }
        if ("throw" === e) throw r;
        if (s) throw a;
        return o(a), r;
      };
    },
    10648170: (t, e, r) => {
      "use strict";
      var n = r(20837561).IteratorPrototype,
        o = r(4546008),
        i = r(71873636),
        a = r(73627903),
        s = r(84511133),
        c = function () {
          return this;
        };
      t.exports = function (t, e, r, u) {
        var l = e + " Iterator";
        return (
          (t.prototype = o(n, { next: i(+!u, r) })),
          a(t, l, !1, !0),
          (s[l] = c),
          t
        );
      };
    },
    2098918: (t, e, r) => {
      "use strict";
      var n = r(82185277),
        o = r(4546008),
        i = r(24415083),
        a = r(34507415),
        s = r(62248275),
        c = r(71814253),
        u = r(71242462),
        l = r(20837561).IteratorPrototype,
        p = r(71577793),
        f = r(3539779),
        h = s("toStringTag"),
        d = "IteratorHelper",
        m = "WrapForValidIterator",
        v = c.set,
        b = function (t) {
          var e = c.getterFor(t ? m : d);
          return a(o(l), {
            next: function () {
              var r = e(this);
              if (t) return r.nextHandler();
              try {
                var n = r.done ? void 0 : r.nextHandler();
                return p(n, r.done);
              } catch (o) {
                throw ((r.done = !0), o);
              }
            },
            return: function () {
              var r = e(this),
                o = r.iterator;
              if (((r.done = !0), t)) {
                var i = u(o, "return");
                return i ? n(i, o) : p(void 0, !0);
              }
              if (r.inner)
                try {
                  f(r.inner.iterator, "normal");
                } catch (a) {
                  return f(o, "throw", a);
                }
              return f(o, "normal"), p(void 0, !0);
            },
          });
        },
        y = b(!0),
        g = b(!1);
      i(g, h, "Iterator Helper"),
        (t.exports = function (t, e) {
          var r = function (r, n) {
            n ? ((n.iterator = r.iterator), (n.next = r.next)) : (n = r),
              (n.type = e ? m : d),
              (n.nextHandler = t),
              (n.counter = 0),
              (n.done = !1),
              v(this, n);
          };
          return (r.prototype = e ? y : g), r;
        });
    },
    41197328: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(82185277),
        i = r(13599787),
        a = r(63398638),
        s = r(6295189),
        c = r(10648170),
        u = r(2003331),
        l = r(15245319),
        p = r(73627903),
        f = r(24415083),
        h = r(17917960),
        d = r(62248275),
        m = r(84511133),
        v = r(20837561),
        b = a.PROPER,
        y = a.CONFIGURABLE,
        g = v.IteratorPrototype,
        _ = v.BUGGY_SAFARI_ITERATORS,
        S = d("iterator"),
        w = "keys",
        A = "values",
        E = "entries",
        B = function () {
          return this;
        };
      t.exports = function (t, e, r, a, d, v, x) {
        c(r, e, a);
        var O,
          k,
          I,
          C = function (t) {
            if (t === d && D) return D;
            if (!_ && t && t in T) return T[t];
            switch (t) {
              case w:
              case A:
              case E:
                return function () {
                  return new r(this, t);
                };
            }
            return function () {
              return new r(this);
            };
          },
          N = e + " Iterator",
          P = !1,
          T = t.prototype,
          j = T[S] || T["@@iterator"] || (d && T[d]),
          D = (!_ && j) || C(d),
          V = ("Array" === e && T.entries) || j;
        if (
          (V &&
            (O = u(V.call(new t()))) !== Object.prototype &&
            O.next &&
            (i || u(O) === g || (l ? l(O, g) : s(O[S]) || h(O, S, B)),
            p(O, N, !0, !0),
            i && (m[N] = B)),
          b &&
            d === A &&
            j &&
            j.name !== A &&
            (!i && y
              ? f(T, "name", A)
              : ((P = !0),
                (D = function () {
                  return o(j, this);
                }))),
          d)
        )
          if (((k = { values: C(A), keys: v ? D : C(w), entries: C(E) }), x))
            for (I in k) (_ || P || !(I in T)) && h(T, I, k[I]);
          else n({ target: e, proto: !0, forced: _ || P }, k);
        return (
          (i && !x) || T[S] === D || h(T, S, D, { name: d }), (m[e] = D), k
        );
      };
    },
    49133897: (t, e, r) => {
      "use strict";
      var n = r(82185277),
        o = r(45031050),
        i = r(32189351),
        a = r(43259527),
        s = r(2098918),
        c = r(32010847),
        u = s(function () {
          var t = this.iterator,
            e = i(n(this.next, t));
          if (!(this.done = !!e.done))
            return c(t, this.mapper, [e.value, this.counter++], !0);
        });
      t.exports = function (t) {
        return i(this), o(t), new u(a(this), { mapper: t });
      };
    },
    20837561: (t, e, r) => {
      "use strict";
      var n,
        o,
        i,
        a = r(17964319),
        s = r(6295189),
        c = r(75849826),
        u = r(4546008),
        l = r(2003331),
        p = r(17917960),
        f = r(62248275),
        h = r(13599787),
        d = f("iterator"),
        m = !1;
      [].keys &&
        ("next" in (i = [].keys())
          ? (o = l(l(i))) !== Object.prototype && (n = o)
          : (m = !0)),
        !c(n) ||
        a(function () {
          var t = {};
          return n[d].call(t) !== t;
        })
          ? (n = {})
          : h && (n = u(n)),
        s(n[d]) ||
          p(n, d, function () {
            return this;
          }),
        (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: m });
    },
    84511133: (t) => {
      "use strict";
      t.exports = {};
    },
    7793558: (t, e, r) => {
      "use strict";
      var n = r(92625342);
      t.exports = function (t) {
        return n(t.length);
      };
    },
    66218731: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(17964319),
        i = r(6295189),
        a = r(26847425),
        s = r(97881036),
        c = r(63398638).CONFIGURABLE,
        u = r(85622122),
        l = r(71814253),
        p = l.enforce,
        f = l.get,
        h = String,
        d = Object.defineProperty,
        m = n("".slice),
        v = n("".replace),
        b = n([].join),
        y =
          s &&
          !o(function () {
            return 8 !== d(function () {}, "length", { value: 8 }).length;
          }),
        g = String(String).split("String"),
        _ = (t.exports = function (t, e, r) {
          "Symbol(" === m(h(e), 0, 7) &&
            (e = "[" + v(h(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            r && r.getter && (e = "get " + e),
            r && r.setter && (e = "set " + e),
            (!a(t, "name") || (c && t.name !== e)) &&
              (s ? d(t, "name", { value: e, configurable: !0 }) : (t.name = e)),
            y &&
              r &&
              a(r, "arity") &&
              t.length !== r.arity &&
              d(t, "length", { value: r.arity });
          try {
            r && a(r, "constructor") && r.constructor
              ? s && d(t, "prototype", { writable: !1 })
              : t.prototype && (t.prototype = void 0);
          } catch (o) {}
          var n = p(t);
          return (
            a(n, "source") || (n.source = b(g, "string" == typeof e ? e : "")),
            t
          );
        });
      Function.prototype.toString = _(function () {
        return (i(this) && f(this).source) || u(this);
      }, "toString");
    },
    37372773: (t) => {
      "use strict";
      var e = Math.ceil,
        r = Math.floor;
      t.exports =
        Math.trunc ||
        function (t) {
          var n = +t;
          return (n > 0 ? r : e)(n);
        };
    },
    87823891: (t, e, r) => {
      "use strict";
      var n,
        o,
        i,
        a,
        s,
        c = r(95619008),
        u = r(7937517),
        l = r(22662608),
        p = r(54442329).set,
        f = r(12565977),
        h = r(73610120),
        d = r(51660745),
        m = r(45343988),
        v = r(61095617),
        b = c.MutationObserver || c.WebKitMutationObserver,
        y = c.document,
        g = c.process,
        _ = c.Promise,
        S = u("queueMicrotask");
      if (!S) {
        var w = new f(),
          A = function () {
            var t, e;
            for (v && (t = g.domain) && t.exit(); (e = w.get()); )
              try {
                e();
              } catch (r) {
                throw (w.head && n(), r);
              }
            t && t.enter();
          };
        h || v || m || !b || !y
          ? !d && _ && _.resolve
            ? (((a = _.resolve(void 0)).constructor = _),
              (s = l(a.then, a)),
              (n = function () {
                s(A);
              }))
            : v
            ? (n = function () {
                g.nextTick(A);
              })
            : ((p = l(p, c)),
              (n = function () {
                p(A);
              }))
          : ((o = !0),
            (i = y.createTextNode("")),
            new b(A).observe(i, { characterData: !0 }),
            (n = function () {
              i.data = o = !o;
            })),
          (S = function (t) {
            w.head || n(), w.add(t);
          });
      }
      t.exports = S;
    },
    77483563: (t, e, r) => {
      "use strict";
      var n = r(45031050),
        o = TypeError,
        i = function (t) {
          var e, r;
          (this.promise = new t(function (t, n) {
            if (void 0 !== e || void 0 !== r)
              throw new o("Bad Promise constructor");
            (e = t), (r = n);
          })),
            (this.resolve = n(e)),
            (this.reject = n(r));
        };
      t.exports.f = function (t) {
        return new i(t);
      };
    },
    53102555: (t, e, r) => {
      "use strict";
      var n = r(31678159);
      t.exports = function (t, e) {
        return void 0 === t ? (arguments.length < 2 ? "" : e) : n(t);
      };
    },
    64403775: (t, e, r) => {
      "use strict";
      var n = r(22576084),
        o = TypeError;
      t.exports = function (t) {
        if (n(t)) throw new o("The method doesn't accept regular expressions");
        return t;
      };
    },
    4546008: (t, e, r) => {
      "use strict";
      var n,
        o = r(32189351),
        i = r(99338369),
        a = r(6120855),
        s = r(13101749),
        c = r(41127437),
        u = r(64054231),
        l = r(64510599),
        p = "prototype",
        f = "script",
        h = l("IE_PROTO"),
        d = function () {},
        m = function (t) {
          return "<" + f + ">" + t + "</" + f + ">";
        },
        v = function (t) {
          t.write(m("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        },
        b = function () {
          try {
            n = new ActiveXObject("htmlfile");
          } catch (i) {}
          var t, e, r;
          b =
            "undefined" != typeof document
              ? document.domain && n
                ? v(n)
                : ((e = u("iframe")),
                  (r = "java" + f + ":"),
                  (e.style.display = "none"),
                  c.appendChild(e),
                  (e.src = String(r)),
                  (t = e.contentWindow.document).open(),
                  t.write(m("document.F=Object")),
                  t.close(),
                  t.F)
              : v(n);
          for (var o = a.length; o--; ) delete b[p][a[o]];
          return b();
        };
      (s[h] = !0),
        (t.exports =
          Object.create ||
          function (t, e) {
            var r;
            return (
              null !== t
                ? ((d[p] = o(t)), (r = new d()), (d[p] = null), (r[h] = t))
                : (r = b()),
              void 0 === e ? r : i.f(r, e)
            );
          });
    },
    99338369: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(51398382),
        i = r(64767377),
        a = r(32189351),
        s = r(86022357),
        c = r(45857120);
      e.f =
        n && !o
          ? Object.defineProperties
          : function (t, e) {
              a(t);
              for (var r, n = s(e), o = c(e), u = o.length, l = 0; u > l; )
                i.f(t, (r = o[l++]), n[r]);
              return t;
            };
    },
    64767377: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(79302765),
        i = r(51398382),
        a = r(32189351),
        s = r(88720361),
        c = TypeError,
        u = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor,
        p = "enumerable",
        f = "configurable",
        h = "writable";
      e.f = n
        ? i
          ? function (t, e, r) {
              if (
                (a(t),
                (e = s(e)),
                a(r),
                "function" == typeof t &&
                  "prototype" === e &&
                  "value" in r &&
                  h in r &&
                  !r[h])
              ) {
                var n = l(t, e);
                n &&
                  n[h] &&
                  ((t[e] = r.value),
                  (r = {
                    configurable: f in r ? r[f] : n[f],
                    enumerable: p in r ? r[p] : n[p],
                    writable: !1,
                  }));
              }
              return u(t, e, r);
            }
          : u
        : function (t, e, r) {
            if ((a(t), (e = s(e)), a(r), o))
              try {
                return u(t, e, r);
              } catch (n) {}
            if ("get" in r || "set" in r)
              throw new c("Accessors not supported");
            return "value" in r && (t[e] = r.value), t;
          };
    },
    37441603: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(82185277),
        i = r(7545477),
        a = r(71873636),
        s = r(86022357),
        c = r(88720361),
        u = r(26847425),
        l = r(79302765),
        p = Object.getOwnPropertyDescriptor;
      e.f = n
        ? p
        : function (t, e) {
            if (((t = s(t)), (e = c(e)), l))
              try {
                return p(t, e);
              } catch (r) {}
            if (u(t, e)) return a(!o(i.f, t, e), t[e]);
          };
    },
    48290746: (t, e, r) => {
      "use strict";
      var n = r(91206336),
        o = r(86022357),
        i = r(61698288).f,
        a = r(28654784),
        s =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      t.exports.f = function (t) {
        return s && "Window" === n(t)
          ? (function (t) {
              try {
                return i(t);
              } catch (e) {
                return a(s);
              }
            })(t)
          : i(o(t));
      };
    },
    61698288: (t, e, r) => {
      "use strict";
      var n = r(17085284),
        o = r(6120855).concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return n(t, o);
        };
    },
    38659413: (t, e) => {
      "use strict";
      e.f = Object.getOwnPropertySymbols;
    },
    2003331: (t, e, r) => {
      "use strict";
      var n = r(26847425),
        o = r(6295189),
        i = r(39045557),
        a = r(64510599),
        s = r(92989875),
        c = a("IE_PROTO"),
        u = Object,
        l = u.prototype;
      t.exports = s
        ? u.getPrototypeOf
        : function (t) {
            var e = i(t);
            if (n(e, c)) return e[c];
            var r = e.constructor;
            return o(r) && e instanceof r
              ? r.prototype
              : e instanceof u
              ? l
              : null;
          };
    },
    61909644: (t, e, r) => {
      "use strict";
      var n = r(17964319),
        o = r(75849826),
        i = r(91206336),
        a = r(9209828),
        s = Object.isExtensible,
        c = n(function () {
          s(1);
        });
      t.exports =
        c || a
          ? function (t) {
              return !!o(t) && (!a || "ArrayBuffer" !== i(t)) && (!s || s(t));
            }
          : s;
    },
    43396857: (t, e, r) => {
      "use strict";
      var n = r(92746832);
      t.exports = n({}.isPrototypeOf);
    },
    17085284: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(26847425),
        i = r(86022357),
        a = r(3239681).indexOf,
        s = r(13101749),
        c = n([].push);
      t.exports = function (t, e) {
        var r,
          n = i(t),
          u = 0,
          l = [];
        for (r in n) !o(s, r) && o(n, r) && c(l, r);
        for (; e.length > u; ) o(n, (r = e[u++])) && (~a(l, r) || c(l, r));
        return l;
      };
    },
    45857120: (t, e, r) => {
      "use strict";
      var n = r(17085284),
        o = r(6120855);
      t.exports =
        Object.keys ||
        function (t) {
          return n(t, o);
        };
    },
    7545477: (t, e) => {
      "use strict";
      var r = {}.propertyIsEnumerable,
        n = Object.getOwnPropertyDescriptor,
        o = n && !r.call({ 1: 2 }, 1);
      e.f = o
        ? function (t) {
            var e = n(this, t);
            return !!e && e.enumerable;
          }
        : r;
    },
    15245319: (t, e, r) => {
      "use strict";
      var n = r(3670610),
        o = r(75849826),
        i = r(15389094),
        a = r(53262658);
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                e = !1,
                r = {};
              try {
                (t = n(Object.prototype, "__proto__", "set"))(r, []),
                  (e = r instanceof Array);
              } catch (s) {}
              return function (r, n) {
                return (
                  i(r), a(n), o(r) ? (e ? t(r, n) : (r.__proto__ = n), r) : r
                );
              };
            })()
          : void 0);
    },
    30537861: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(17964319),
        i = r(92746832),
        a = r(2003331),
        s = r(45857120),
        c = r(86022357),
        u = i(r(7545477).f),
        l = i([].push),
        p =
          n &&
          o(function () {
            var t = Object.create(null);
            return (t[2] = 2), !u(t, 2);
          }),
        f = function (t) {
          return function (e) {
            for (
              var r,
                o = c(e),
                i = s(o),
                f = p && null === a(o),
                h = i.length,
                d = 0,
                m = [];
              h > d;

            )
              (r = i[d++]),
                (n && !(f ? r in o : u(o, r))) || l(m, t ? [r, o[r]] : o[r]);
            return m;
          };
        };
      t.exports = { entries: f(!0), values: f(!1) };
    },
    45910715: (t, e, r) => {
      "use strict";
      var n = r(10578092),
        o = r(15357275);
      t.exports = n
        ? {}.toString
        : function () {
            return "[object " + o(this) + "]";
          };
    },
    40008558: (t, e, r) => {
      "use strict";
      var n = r(82185277),
        o = r(6295189),
        i = r(75849826),
        a = TypeError;
      t.exports = function (t, e) {
        var r, s;
        if ("string" === e && o((r = t.toString)) && !i((s = n(r, t))))
          return s;
        if (o((r = t.valueOf)) && !i((s = n(r, t)))) return s;
        if ("string" !== e && o((r = t.toString)) && !i((s = n(r, t))))
          return s;
        throw new a("Can't convert object to primitive value");
      };
    },
    59264791: (t, e, r) => {
      "use strict";
      var n = r(60033783),
        o = r(92746832),
        i = r(61698288),
        a = r(38659413),
        s = r(32189351),
        c = o([].concat);
      t.exports =
        n("Reflect", "ownKeys") ||
        function (t) {
          var e = i.f(s(t)),
            r = a.f;
          return r ? c(e, r(t)) : e;
        };
    },
    63206591: (t, e, r) => {
      "use strict";
      var n = r(95619008);
      t.exports = n;
    },
    58747087: (t) => {
      "use strict";
      t.exports = function (t) {
        try {
          return { error: !1, value: t() };
        } catch (e) {
          return { error: !0, value: e };
        }
      };
    },
    95074756: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(34330246),
        i = r(6295189),
        a = r(59117244),
        s = r(85622122),
        c = r(62248275),
        u = r(28494039),
        l = r(13599787),
        p = r(19678175),
        f = o && o.prototype,
        h = c("species"),
        d = !1,
        m = i(n.PromiseRejectionEvent),
        v = a("Promise", function () {
          var t = s(o),
            e = t !== String(o);
          if (!e && 66 === p) return !0;
          if (l && (!f.catch || !f.finally)) return !0;
          if (!p || p < 51 || !/native code/.test(t)) {
            var r = new o(function (t) {
                t(1);
              }),
              n = function (t) {
                t(
                  function () {},
                  function () {}
                );
              };
            if (
              (((r.constructor = {})[h] = n),
              !(d = r.then(function () {}) instanceof n))
            )
              return !0;
          }
          return !(e || ("BROWSER" !== u && "DENO" !== u) || m);
        });
      t.exports = { CONSTRUCTOR: v, REJECTION_EVENT: m, SUBCLASSING: d };
    },
    34330246: (t, e, r) => {
      "use strict";
      var n = r(95619008);
      t.exports = n.Promise;
    },
    70279166: (t, e, r) => {
      "use strict";
      var n = r(32189351),
        o = r(75849826),
        i = r(77483563);
      t.exports = function (t, e) {
        if ((n(t), o(e) && e.constructor === t)) return e;
        var r = i.f(t);
        return (0, r.resolve)(e), r.promise;
      };
    },
    17211977: (t, e, r) => {
      "use strict";
      var n = r(34330246),
        o = r(90871788),
        i = r(95074756).CONSTRUCTOR;
      t.exports =
        i ||
        !o(function (t) {
          n.all(t).then(void 0, function () {});
        });
    },
    39129584: (t, e, r) => {
      "use strict";
      var n = r(64767377).f;
      t.exports = function (t, e, r) {
        r in t ||
          n(t, r, {
            configurable: !0,
            get: function () {
              return e[r];
            },
            set: function (t) {
              e[r] = t;
            },
          });
      };
    },
    12565977: (t) => {
      "use strict";
      var e = function () {
        (this.head = null), (this.tail = null);
      };
      (e.prototype = {
        add: function (t) {
          var e = { item: t, next: null },
            r = this.tail;
          r ? (r.next = e) : (this.head = e), (this.tail = e);
        },
        get: function () {
          var t = this.head;
          if (t)
            return null === (this.head = t.next) && (this.tail = null), t.item;
        },
      }),
        (t.exports = e);
    },
    33707306: (t, e, r) => {
      "use strict";
      var n = r(82185277),
        o = r(32189351),
        i = r(6295189),
        a = r(91206336),
        s = r(35761195),
        c = TypeError;
      t.exports = function (t, e) {
        var r = t.exec;
        if (i(r)) {
          var u = n(r, t, e);
          return null !== u && o(u), u;
        }
        if ("RegExp" === a(t)) return n(s, t, e);
        throw new c("RegExp#exec called on incompatible receiver");
      };
    },
    35761195: (t, e, r) => {
      "use strict";
      var n,
        o,
        i = r(82185277),
        a = r(92746832),
        s = r(31678159),
        c = r(80327915),
        u = r(45855709),
        l = r(96365585),
        p = r(4546008),
        f = r(71814253).get,
        h = r(7634099),
        d = r(78943102),
        m = l("native-string-replace", String.prototype.replace),
        v = RegExp.prototype.exec,
        b = v,
        y = a("".charAt),
        g = a("".indexOf),
        _ = a("".replace),
        S = a("".slice),
        w =
          ((o = /b*/g),
          i(v, (n = /a/), "a"),
          i(v, o, "a"),
          0 !== n.lastIndex || 0 !== o.lastIndex),
        A = u.BROKEN_CARET,
        E = void 0 !== /()??/.exec("")[1];
      (w || E || A || h || d) &&
        (b = function (t) {
          var e,
            r,
            n,
            o,
            a,
            u,
            l,
            h = this,
            d = f(h),
            B = s(t),
            x = d.raw;
          if (x)
            return (
              (x.lastIndex = h.lastIndex),
              (e = i(b, x, B)),
              (h.lastIndex = x.lastIndex),
              e
            );
          var O = d.groups,
            k = A && h.sticky,
            I = i(c, h),
            C = h.source,
            N = 0,
            P = B;
          if (
            (k &&
              ((I = _(I, "y", "")),
              -1 === g(I, "g") && (I += "g"),
              (P = S(B, h.lastIndex)),
              h.lastIndex > 0 &&
                (!h.multiline ||
                  (h.multiline && "\n" !== y(B, h.lastIndex - 1))) &&
                ((C = "(?: " + C + ")"), (P = " " + P), N++),
              (r = new RegExp("^(?:" + C + ")", I))),
            E && (r = new RegExp("^" + C + "$(?!\\s)", I)),
            w && (n = h.lastIndex),
            (o = i(v, k ? r : h, P)),
            k
              ? o
                ? ((o.input = S(o.input, N)),
                  (o[0] = S(o[0], N)),
                  (o.index = h.lastIndex),
                  (h.lastIndex += o[0].length))
                : (h.lastIndex = 0)
              : w && o && (h.lastIndex = h.global ? o.index + o[0].length : n),
            E &&
              o &&
              o.length > 1 &&
              i(m, o[0], r, function () {
                for (a = 1; a < arguments.length - 2; a++)
                  void 0 === arguments[a] && (o[a] = void 0);
              }),
            o && O)
          )
            for (o.groups = u = p(null), a = 0; a < O.length; a++)
              u[(l = O[a])[0]] = o[l[1]];
          return o;
        }),
        (t.exports = b);
    },
    80327915: (t, e, r) => {
      "use strict";
      var n = r(32189351);
      t.exports = function () {
        var t = n(this),
          e = "";
        return (
          t.hasIndices && (e += "d"),
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.unicodeSets && (e += "v"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    34818794: (t, e, r) => {
      "use strict";
      var n = r(82185277),
        o = r(26847425),
        i = r(43396857),
        a = r(80327915),
        s = RegExp.prototype;
      t.exports = function (t) {
        var e = t.flags;
        return void 0 !== e || "flags" in s || o(t, "flags") || !i(s, t)
          ? e
          : n(a, t);
      };
    },
    45855709: (t, e, r) => {
      "use strict";
      var n = r(17964319),
        o = r(95619008).RegExp,
        i = n(function () {
          var t = o("a", "y");
          return (t.lastIndex = 2), null !== t.exec("abcd");
        }),
        a =
          i ||
          n(function () {
            return !o("a", "y").sticky;
          }),
        s =
          i ||
          n(function () {
            var t = o("^r", "gy");
            return (t.lastIndex = 2), null !== t.exec("str");
          });
      t.exports = { BROKEN_CARET: s, MISSED_STICKY: a, UNSUPPORTED_Y: i };
    },
    7634099: (t, e, r) => {
      "use strict";
      var n = r(17964319),
        o = r(95619008).RegExp;
      t.exports = n(function () {
        var t = o(".", "s");
        return !(t.dotAll && t.test("\n") && "s" === t.flags);
      });
    },
    78943102: (t, e, r) => {
      "use strict";
      var n = r(17964319),
        o = r(95619008).RegExp;
      t.exports = n(function () {
        var t = o("(?<a>b)", "g");
        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
      });
    },
    15389094: (t, e, r) => {
      "use strict";
      var n = r(63139477),
        o = TypeError;
      t.exports = function (t) {
        if (n(t)) throw new o("Can't call method on " + t);
        return t;
      };
    },
    7937517: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(97881036),
        i = Object.getOwnPropertyDescriptor;
      t.exports = function (t) {
        if (!o) return n[t];
        var e = i(n, t);
        return e && e.value;
      };
    },
    21172241: (t, e, r) => {
      "use strict";
      var n = r(60033783),
        o = r(83560634),
        i = r(62248275),
        a = r(97881036),
        s = i("species");
      t.exports = function (t) {
        var e = n(t);
        a &&
          e &&
          !e[s] &&
          o(e, s, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    73627903: (t, e, r) => {
      "use strict";
      var n = r(64767377).f,
        o = r(26847425),
        i = r(62248275)("toStringTag");
      t.exports = function (t, e, r) {
        t && !r && (t = t.prototype),
          t && !o(t, i) && n(t, i, { configurable: !0, value: e });
      };
    },
    64510599: (t, e, r) => {
      "use strict";
      var n = r(96365585),
        o = r(7593520),
        i = n("keys");
      t.exports = function (t) {
        return i[t] || (i[t] = o(t));
      };
    },
    7866109: (t, e, r) => {
      "use strict";
      var n = r(13599787),
        o = r(95619008),
        i = r(48829257),
        a = "__core-js_shared__",
        s = (t.exports = o[a] || i(a, {}));
      (s.versions || (s.versions = [])).push({
        version: "3.38.1",
        mode: n ? "pure" : "global",
        copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
        source: "https://github.com/zloirock/core-js",
      });
    },
    96365585: (t, e, r) => {
      "use strict";
      var n = r(7866109);
      t.exports = function (t, e) {
        return n[t] || (n[t] = e || {});
      };
    },
    84870901: (t, e, r) => {
      "use strict";
      var n = r(32189351),
        o = r(11291772),
        i = r(63139477),
        a = r(62248275)("species");
      t.exports = function (t, e) {
        var r,
          s = n(t).constructor;
        return void 0 === s || i((r = n(s)[a])) ? e : o(r);
      };
    },
    34745591: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(73390427),
        i = r(31678159),
        a = r(15389094),
        s = n("".charAt),
        c = n("".charCodeAt),
        u = n("".slice),
        l = function (t) {
          return function (e, r) {
            var n,
              l,
              p = i(a(e)),
              f = o(r),
              h = p.length;
            return f < 0 || f >= h
              ? t
                ? ""
                : void 0
              : (n = c(p, f)) < 55296 ||
                n > 56319 ||
                f + 1 === h ||
                (l = c(p, f + 1)) < 56320 ||
                l > 57343
              ? t
                ? s(p, f)
                : n
              : t
              ? u(p, f, f + 2)
              : l - 56320 + ((n - 55296) << 10) + 65536;
          };
        };
      t.exports = { codeAt: l(!1), charAt: l(!0) };
    },
    13678330: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = r(15389094),
        i = r(31678159),
        a = r(40762716),
        s = n("".replace),
        c = RegExp("^[" + a + "]+"),
        u = RegExp("(^|[^" + a + "])[" + a + "]+$"),
        l = function (t) {
          return function (e) {
            var r = i(o(e));
            return 1 & t && (r = s(r, c, "")), 2 & t && (r = s(r, u, "$1")), r;
          };
        };
      t.exports = { start: l(1), end: l(2), trim: l(3) };
    },
    8401231: (t, e, r) => {
      "use strict";
      var n = r(19678175),
        o = r(17964319),
        i = r(95619008).String;
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !o(function () {
          var t = Symbol("symbol detection");
          return (
            !i(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && n && n < 41)
          );
        });
    },
    253922: (t, e, r) => {
      "use strict";
      var n = r(82185277),
        o = r(60033783),
        i = r(62248275),
        a = r(17917960);
      t.exports = function () {
        var t = o("Symbol"),
          e = t && t.prototype,
          r = e && e.valueOf,
          s = i("toPrimitive");
        e &&
          !e[s] &&
          a(
            e,
            s,
            function (t) {
              return n(r, this);
            },
            { arity: 1 }
          );
      };
    },
    47427840: (t, e, r) => {
      "use strict";
      var n = r(8401231);
      t.exports = n && !!Symbol.for && !!Symbol.keyFor;
    },
    54442329: (t, e, r) => {
      "use strict";
      var n,
        o,
        i,
        a,
        s = r(95619008),
        c = r(12020825),
        u = r(22662608),
        l = r(6295189),
        p = r(26847425),
        f = r(17964319),
        h = r(41127437),
        d = r(28654784),
        m = r(64054231),
        v = r(69053340),
        b = r(73610120),
        y = r(61095617),
        g = s.setImmediate,
        _ = s.clearImmediate,
        S = s.process,
        w = s.Dispatch,
        A = s.Function,
        E = s.MessageChannel,
        B = s.String,
        x = 0,
        O = {},
        k = "onreadystatechange";
      f(function () {
        n = s.location;
      });
      var I = function (t) {
          if (p(O, t)) {
            var e = O[t];
            delete O[t], e();
          }
        },
        C = function (t) {
          return function () {
            I(t);
          };
        },
        N = function (t) {
          I(t.data);
        },
        P = function (t) {
          s.postMessage(B(t), n.protocol + "//" + n.host);
        };
      (g && _) ||
        ((g = function (t) {
          v(arguments.length, 1);
          var e = l(t) ? t : A(t),
            r = d(arguments, 1);
          return (
            (O[++x] = function () {
              c(e, void 0, r);
            }),
            o(x),
            x
          );
        }),
        (_ = function (t) {
          delete O[t];
        }),
        y
          ? (o = function (t) {
              S.nextTick(C(t));
            })
          : w && w.now
          ? (o = function (t) {
              w.now(C(t));
            })
          : E && !b
          ? ((a = (i = new E()).port2),
            (i.port1.onmessage = N),
            (o = u(a.postMessage, a)))
          : s.addEventListener &&
            l(s.postMessage) &&
            !s.importScripts &&
            n &&
            "file:" !== n.protocol &&
            !f(P)
          ? ((o = P), s.addEventListener("message", N, !1))
          : (o =
              k in m("script")
                ? function (t) {
                    h.appendChild(m("script"))[k] = function () {
                      h.removeChild(this), I(t);
                    };
                  }
                : function (t) {
                    setTimeout(C(t), 0);
                  })),
        (t.exports = { set: g, clear: _ });
    },
    68348936: (t, e, r) => {
      "use strict";
      var n = r(92746832);
      t.exports = n((1).valueOf);
    },
    34897786: (t, e, r) => {
      "use strict";
      var n = r(73390427),
        o = Math.max,
        i = Math.min;
      t.exports = function (t, e) {
        var r = n(t);
        return r < 0 ? o(r + e, 0) : i(r, e);
      };
    },
    86022357: (t, e, r) => {
      "use strict";
      var n = r(85687055),
        o = r(15389094);
      t.exports = function (t) {
        return n(o(t));
      };
    },
    73390427: (t, e, r) => {
      "use strict";
      var n = r(37372773);
      t.exports = function (t) {
        var e = +t;
        return e != e || 0 === e ? 0 : n(e);
      };
    },
    92625342: (t, e, r) => {
      "use strict";
      var n = r(73390427),
        o = Math.min;
      t.exports = function (t) {
        var e = n(t);
        return e > 0 ? o(e, 9007199254740991) : 0;
      };
    },
    39045557: (t, e, r) => {
      "use strict";
      var n = r(15389094),
        o = Object;
      t.exports = function (t) {
        return o(n(t));
      };
    },
    53401929: (t, e, r) => {
      "use strict";
      var n = r(82185277),
        o = r(75849826),
        i = r(93988325),
        a = r(71242462),
        s = r(40008558),
        c = r(62248275),
        u = TypeError,
        l = c("toPrimitive");
      t.exports = function (t, e) {
        if (!o(t) || i(t)) return t;
        var r,
          c = a(t, l);
        if (c) {
          if (
            (void 0 === e && (e = "default"), (r = n(c, t, e)), !o(r) || i(r))
          )
            return r;
          throw new u("Can't convert object to primitive value");
        }
        return void 0 === e && (e = "number"), s(t, e);
      };
    },
    88720361: (t, e, r) => {
      "use strict";
      var n = r(53401929),
        o = r(93988325);
      t.exports = function (t) {
        var e = n(t, "string");
        return o(e) ? e : e + "";
      };
    },
    10578092: (t, e, r) => {
      "use strict";
      var n = {};
      (n[r(62248275)("toStringTag")] = "z"),
        (t.exports = "[object z]" === String(n));
    },
    31678159: (t, e, r) => {
      "use strict";
      var n = r(15357275),
        o = String;
      t.exports = function (t) {
        if ("Symbol" === n(t))
          throw new TypeError("Cannot convert a Symbol value to a string");
        return o(t);
      };
    },
    71858391: (t) => {
      "use strict";
      var e = String;
      t.exports = function (t) {
        try {
          return e(t);
        } catch (r) {
          return "Object";
        }
      };
    },
    7593520: (t, e, r) => {
      "use strict";
      var n = r(92746832),
        o = 0,
        i = Math.random(),
        a = n((1).toString);
      t.exports = function (t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
      };
    },
    59897048: (t, e, r) => {
      "use strict";
      var n = r(17964319),
        o = r(62248275),
        i = r(97881036),
        a = r(13599787),
        s = o("iterator");
      t.exports = !n(function () {
        var t = new URL("b?a=1&b=2&c=3", "https://a"),
          e = t.searchParams,
          r = new URLSearchParams("a=1&a=2&b=3"),
          n = "";
        return (
          (t.pathname = "c%20d"),
          e.forEach(function (t, r) {
            e.delete("b"), (n += r + t);
          }),
          r.delete("a", 2),
          r.delete("b", void 0),
          (a &&
            (!t.toJSON ||
              !r.has("a", 1) ||
              r.has("a", 2) ||
              !r.has("a", void 0) ||
              r.has("b"))) ||
            (!e.size && (a || !i)) ||
            !e.sort ||
            "https://a/c%20d?a=1&c=3" !== t.href ||
            "3" !== e.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !e[s] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("https://тест").host ||
            "#%D0%B1" !== new URL("https://a#б").hash ||
            "a1c3" !== n ||
            "x" !== new URL("https://x", void 0).host
        );
      });
    },
    50520448: (t, e, r) => {
      "use strict";
      var n = r(8401231);
      t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    51398382: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(17964319);
      t.exports =
        n &&
        o(function () {
          return (
            42 !==
            Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1,
            }).prototype
          );
        });
    },
    69053340: (t) => {
      "use strict";
      var e = TypeError;
      t.exports = function (t, r) {
        if (t < r) throw new e("Not enough arguments");
        return t;
      };
    },
    34850366: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(6295189),
        i = n.WeakMap;
      t.exports = o(i) && /native code/.test(String(i));
    },
    76322287: (t, e, r) => {
      "use strict";
      var n = r(63206591),
        o = r(26847425),
        i = r(985631),
        a = r(64767377).f;
      t.exports = function (t) {
        var e = n.Symbol || (n.Symbol = {});
        o(e, t) || a(e, t, { value: i.f(t) });
      };
    },
    985631: (t, e, r) => {
      "use strict";
      var n = r(62248275);
      e.f = n;
    },
    62248275: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(96365585),
        i = r(26847425),
        a = r(7593520),
        s = r(8401231),
        c = r(50520448),
        u = n.Symbol,
        l = o("wks"),
        p = c ? u.for || u : (u && u.withoutSetter) || a;
      t.exports = function (t) {
        return i(l, t) || (l[t] = s && i(u, t) ? u[t] : p("Symbol." + t)), l[t];
      };
    },
    40762716: (t) => {
      "use strict";
      t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    21496041: (t, e, r) => {
      "use strict";
      var n = r(60033783),
        o = r(26847425),
        i = r(24415083),
        a = r(43396857),
        s = r(15245319),
        c = r(87344268),
        u = r(39129584),
        l = r(14531263),
        p = r(53102555),
        f = r(88736976),
        h = r(72786283),
        d = r(97881036),
        m = r(13599787);
      t.exports = function (t, e, r, v) {
        var b = "stackTraceLimit",
          y = v ? 2 : 1,
          g = t.split("."),
          _ = g[g.length - 1],
          S = n.apply(null, g);
        if (S) {
          var w = S.prototype;
          if ((!m && o(w, "cause") && delete w.cause, !r)) return S;
          var A = n("Error"),
            E = e(function (t, e) {
              var r = p(v ? e : t, void 0),
                n = v ? new S(t) : new S();
              return (
                void 0 !== r && i(n, "message", r),
                h(n, E, n.stack, 2),
                this && a(w, this) && l(n, this, E),
                arguments.length > y && f(n, arguments[y]),
                n
              );
            });
          if (
            ((E.prototype = w),
            "Error" !== _
              ? s
                ? s(E, A)
                : c(E, A, { name: !0 })
              : d && b in S && (u(E, S, b), u(E, S, "prepareStackTrace")),
            c(E, S),
            !m)
          )
            try {
              w.name !== _ && i(w, "name", _), (w.constructor = E);
            } catch (B) {}
          return E;
        }
      };
    },
    95723650: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(17964319),
        i = r(99195304),
        a = r(75849826),
        s = r(39045557),
        c = r(7793558),
        u = r(68509637),
        l = r(74893328),
        p = r(86282333),
        f = r(46921189),
        h = r(62248275),
        d = r(19678175),
        m = h("isConcatSpreadable"),
        v =
          d >= 51 ||
          !o(function () {
            var t = [];
            return (t[m] = !1), t.concat()[0] !== t;
          }),
        b = function (t) {
          if (!a(t)) return !1;
          var e = t[m];
          return void 0 !== e ? !!e : i(t);
        };
      n(
        { target: "Array", proto: !0, arity: 1, forced: !v || !f("concat") },
        {
          concat: function (t) {
            var e,
              r,
              n,
              o,
              i,
              a = s(this),
              f = p(a, 0),
              h = 0;
            for (e = -1, n = arguments.length; e < n; e++)
              if (b((i = -1 === e ? a : arguments[e])))
                for (o = c(i), u(h + o), r = 0; r < o; r++, h++)
                  r in i && l(f, h, i[r]);
              else u(h + 1), l(f, h++, i);
            return (f.length = h), f;
          },
        }
      );
    },
    54660056: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(39485517).filter;
      n(
        { target: "Array", proto: !0, forced: !r(46921189)("filter") },
        {
          filter: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    95257620: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(39485517).findIndex,
        i = r(25798213),
        a = "findIndex",
        s = !0;
      a in [] &&
        Array(1)[a](function () {
          s = !1;
        }),
        n(
          { target: "Array", proto: !0, forced: s },
          {
            findIndex: function (t) {
              return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        i(a);
    },
    4835009: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(39485517).find,
        i = r(25798213),
        a = "find",
        s = !0;
      a in [] &&
        Array(1)[a](function () {
          s = !1;
        }),
        n(
          { target: "Array", proto: !0, forced: s },
          {
            find: function (t) {
              return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        i(a);
    },
    68090010: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(36473372);
      n(
        {
          target: "Array",
          stat: !0,
          forced: !r(90871788)(function (t) {
            Array.from(t);
          }),
        },
        { from: o }
      );
    },
    5320247: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(3239681).includes,
        i = r(17964319),
        a = r(25798213);
      n(
        {
          target: "Array",
          proto: !0,
          forced: i(function () {
            return !Array(1).includes();
          }),
        },
        {
          includes: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        a("includes");
    },
    62951728: (t, e, r) => {
      "use strict";
      var n = r(86022357),
        o = r(25798213),
        i = r(84511133),
        a = r(71814253),
        s = r(64767377).f,
        c = r(41197328),
        u = r(71577793),
        l = r(13599787),
        p = r(97881036),
        f = "Array Iterator",
        h = a.set,
        d = a.getterFor(f);
      t.exports = c(
        Array,
        "Array",
        function (t, e) {
          h(this, { type: f, target: n(t), index: 0, kind: e });
        },
        function () {
          var t = d(this),
            e = t.target,
            r = t.index++;
          if (!e || r >= e.length) return (t.target = null), u(void 0, !0);
          switch (t.kind) {
            case "keys":
              return u(r, !1);
            case "values":
              return u(e[r], !1);
          }
          return u([r, e[r]], !1);
        },
        "values"
      );
      var m = (i.Arguments = i.Array);
      if (
        (o("keys"), o("values"), o("entries"), !l && p && "values" !== m.name)
      )
        try {
          s(m, "name", { value: "values" });
        } catch (v) {}
    },
    48158254: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(39485517).map;
      n(
        { target: "Array", proto: !0, forced: !r(46921189)("map") },
        {
          map: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    97200626: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(39045557),
        i = r(7793558),
        a = r(24509983),
        s = r(68509637);
      n(
        {
          target: "Array",
          proto: !0,
          arity: 1,
          forced:
            r(17964319)(function () {
              return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
            }) ||
            !(function () {
              try {
                Object.defineProperty([], "length", { writable: !1 }).push();
              } catch (t) {
                return t instanceof TypeError;
              }
            })(),
        },
        {
          push: function (t) {
            var e = o(this),
              r = i(e),
              n = arguments.length;
            s(r + n);
            for (var c = 0; c < n; c++) (e[r] = arguments[c]), r++;
            return a(e, r), r;
          },
        }
      );
    },
    6137992: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(47667518).left,
        i = r(5841222),
        a = r(19678175);
      n(
        {
          target: "Array",
          proto: !0,
          forced: (!r(61095617) && a > 79 && a < 83) || !i("reduce"),
        },
        {
          reduce: function (t) {
            var e = arguments.length;
            return o(this, t, e, e > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    50473502: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(99195304),
        i = r(87487757),
        a = r(75849826),
        s = r(34897786),
        c = r(7793558),
        u = r(86022357),
        l = r(74893328),
        p = r(62248275),
        f = r(46921189),
        h = r(28654784),
        d = f("slice"),
        m = p("species"),
        v = Array,
        b = Math.max;
      n(
        { target: "Array", proto: !0, forced: !d },
        {
          slice: function (t, e) {
            var r,
              n,
              p,
              f = u(this),
              d = c(f),
              y = s(t, d),
              g = s(void 0 === e ? d : e, d);
            if (
              o(f) &&
              ((r = f.constructor),
              ((i(r) && (r === v || o(r.prototype))) ||
                (a(r) && null === (r = r[m]))) &&
                (r = void 0),
              r === v || void 0 === r)
            )
              return h(f, y, g);
            for (
              n = new (void 0 === r ? v : r)(b(g - y, 0)), p = 0;
              y < g;
              y++, p++
            )
              y in f && l(n, p, f[y]);
            return (n.length = p), n;
          },
        }
      );
    },
    97163518: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(92746832),
        i = r(45031050),
        a = r(39045557),
        s = r(7793558),
        c = r(51345246),
        u = r(31678159),
        l = r(17964319),
        p = r(88769624),
        f = r(5841222),
        h = r(61687661),
        d = r(92792579),
        m = r(19678175),
        v = r(78614711),
        b = [],
        y = o(b.sort),
        g = o(b.push),
        _ = l(function () {
          b.sort(void 0);
        }),
        S = l(function () {
          b.sort(null);
        }),
        w = f("sort"),
        A = !l(function () {
          if (m) return m < 70;
          if (!(h && h > 3)) {
            if (d) return !0;
            if (v) return v < 603;
            var t,
              e,
              r,
              n,
              o = "";
            for (t = 65; t < 76; t++) {
              switch (((e = String.fromCharCode(t)), t)) {
                case 66:
                case 69:
                case 70:
                case 72:
                  r = 3;
                  break;
                case 68:
                case 71:
                  r = 4;
                  break;
                default:
                  r = 2;
              }
              for (n = 0; n < 47; n++) b.push({ k: e + n, v: r });
            }
            for (
              b.sort(function (t, e) {
                return e.v - t.v;
              }),
                n = 0;
              n < b.length;
              n++
            )
              (e = b[n].k.charAt(0)), o.charAt(o.length - 1) !== e && (o += e);
            return "DGBEFHACIJK" !== o;
          }
        });
      n(
        { target: "Array", proto: !0, forced: _ || !S || !w || !A },
        {
          sort: function (t) {
            void 0 !== t && i(t);
            var e = a(this);
            if (A) return void 0 === t ? y(e) : y(e, t);
            var r,
              n,
              o = [],
              l = s(e);
            for (n = 0; n < l; n++) n in e && g(o, e[n]);
            for (
              p(
                o,
                (function (t) {
                  return function (e, r) {
                    return void 0 === r
                      ? -1
                      : void 0 === e
                      ? 1
                      : void 0 !== t
                      ? +t(e, r) || 0
                      : u(e) > u(r)
                      ? 1
                      : -1;
                  };
                })(t)
              ),
                r = s(o),
                n = 0;
              n < r;

            )
              e[n] = o[n++];
            for (; n < l; ) c(e, n++);
            return e;
          },
        }
      );
    },
    57180314: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(39045557),
        i = r(34897786),
        a = r(73390427),
        s = r(7793558),
        c = r(24509983),
        u = r(68509637),
        l = r(86282333),
        p = r(74893328),
        f = r(51345246),
        h = r(46921189)("splice"),
        d = Math.max,
        m = Math.min;
      n(
        { target: "Array", proto: !0, forced: !h },
        {
          splice: function (t, e) {
            var r,
              n,
              h,
              v,
              b,
              y,
              g = o(this),
              _ = s(g),
              S = i(t, _),
              w = arguments.length;
            for (
              0 === w
                ? (r = n = 0)
                : 1 === w
                ? ((r = 0), (n = _ - S))
                : ((r = w - 2), (n = m(d(a(e), 0), _ - S))),
                u(_ + r - n),
                h = l(g, n),
                v = 0;
              v < n;
              v++
            )
              (b = S + v) in g && p(h, v, g[b]);
            if (((h.length = n), r < n)) {
              for (v = S; v < _ - n; v++)
                (y = v + r), (b = v + n) in g ? (g[y] = g[b]) : f(g, y);
              for (v = _; v > _ - n + r; v--) f(g, v - 1);
            } else if (r > n)
              for (v = _ - n; v > S; v--)
                (y = v + r - 1), (b = v + n - 1) in g ? (g[y] = g[b]) : f(g, y);
            for (v = 0; v < r; v++) g[v + S] = arguments[v + 2];
            return c(g, _ - n + r), h;
          },
        }
      );
    },
    47274729: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(39045557),
        i = r(7793558),
        a = r(24509983),
        s = r(51345246),
        c = r(68509637);
      n(
        {
          target: "Array",
          proto: !0,
          arity: 1,
          forced:
            1 !== [].unshift(0) ||
            !(function () {
              try {
                Object.defineProperty([], "length", { writable: !1 }).unshift();
              } catch (t) {
                return t instanceof TypeError;
              }
            })(),
        },
        {
          unshift: function (t) {
            var e = o(this),
              r = i(e),
              n = arguments.length;
            if (n) {
              c(r + n);
              for (var u = r; u--; ) {
                var l = u + n;
                u in e ? (e[l] = e[u]) : s(e, l);
              }
              for (var p = 0; p < n; p++) e[p] = arguments[p];
            }
            return a(e, r + n);
          },
        }
      );
    },
    17522308: (t, e, r) => {
      "use strict";
      var n = r(26847425),
        o = r(17917960),
        i = r(31265256),
        a = r(62248275)("toPrimitive"),
        s = Date.prototype;
      n(s, a) || o(s, a, i);
    },
    44381336: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(95619008),
        i = r(12020825),
        a = r(21496041),
        s = "WebAssembly",
        c = o[s],
        u = 7 !== new Error("e", { cause: 7 }).cause,
        l = function (t, e) {
          var r = {};
          (r[t] = a(t, e, u)),
            n({ global: !0, constructor: !0, arity: 1, forced: u }, r);
        },
        p = function (t, e) {
          if (c && c[t]) {
            var r = {};
            (r[t] = a(s + "." + t, e, u)),
              n(
                { target: s, stat: !0, constructor: !0, arity: 1, forced: u },
                r
              );
          }
        };
      l("Error", function (t) {
        return function (e) {
          return i(t, this, arguments);
        };
      }),
        l("EvalError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }),
        l("RangeError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }),
        l("ReferenceError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }),
        l("SyntaxError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }),
        l("TypeError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }),
        l("URIError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }),
        p("CompileError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }),
        p("LinkError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        }),
        p("RuntimeError", function (t) {
          return function (e) {
            return i(t, this, arguments);
          };
        });
    },
    77276790: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(60033783),
        i = r(12020825),
        a = r(82185277),
        s = r(92746832),
        c = r(17964319),
        u = r(6295189),
        l = r(93988325),
        p = r(28654784),
        f = r(65216565),
        h = r(8401231),
        d = String,
        m = o("JSON", "stringify"),
        v = s(/./.exec),
        b = s("".charAt),
        y = s("".charCodeAt),
        g = s("".replace),
        _ = s((1).toString),
        S = /[\uD800-\uDFFF]/g,
        w = /^[\uD800-\uDBFF]$/,
        A = /^[\uDC00-\uDFFF]$/,
        E =
          !h ||
          c(function () {
            var t = o("Symbol")("stringify detection");
            return (
              "[null]" !== m([t]) ||
              "{}" !== m({ a: t }) ||
              "{}" !== m(Object(t))
            );
          }),
        B = c(function () {
          return (
            '"\\udf06\\ud834"' !== m("\udf06\ud834") ||
            '"\\udead"' !== m("\udead")
          );
        }),
        x = function (t, e) {
          var r = p(arguments),
            n = f(e);
          if (u(n) || (void 0 !== t && !l(t)))
            return (
              (r[1] = function (t, e) {
                if ((u(n) && (e = a(n, this, d(t), e)), !l(e))) return e;
              }),
              i(m, null, r)
            );
        },
        O = function (t, e, r) {
          var n = b(r, e - 1),
            o = b(r, e + 1);
          return (v(w, t) && !v(A, o)) || (v(A, t) && !v(w, n))
            ? "\\u" + _(y(t, 0), 16)
            : t;
        };
      m &&
        n(
          { target: "JSON", stat: !0, arity: 3, forced: E || B },
          {
            stringify: function (t, e, r) {
              var n = p(arguments),
                o = i(E ? x : m, null, n);
              return B && "string" == typeof o ? g(o, S, O) : o;
            },
          }
        );
    },
    96050667: (t, e, r) => {
      "use strict";
      r(46948980)(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        r(25529914)
      );
    },
    71459841: (t, e, r) => {
      "use strict";
      r(96050667);
    },
    44422217: (t, e, r) => {
      "use strict";
      r(33084182)({ target: "Math", stat: !0 }, { trunc: r(37372773) });
    },
    4421388: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(13599787),
        i = r(97881036),
        a = r(95619008),
        s = r(63206591),
        c = r(92746832),
        u = r(59117244),
        l = r(26847425),
        p = r(14531263),
        f = r(43396857),
        h = r(93988325),
        d = r(53401929),
        m = r(17964319),
        v = r(61698288).f,
        b = r(37441603).f,
        y = r(64767377).f,
        g = r(68348936),
        _ = r(13678330).trim,
        S = "Number",
        w = a[S],
        A = s[S],
        E = w.prototype,
        B = a.TypeError,
        x = c("".slice),
        O = c("".charCodeAt),
        k = function (t) {
          var e,
            r,
            n,
            o,
            i,
            a,
            s,
            c,
            u = d(t, "number");
          if (h(u)) throw new B("Cannot convert a Symbol value to a number");
          if ("string" == typeof u && u.length > 2)
            if (((u = _(u)), 43 === (e = O(u, 0)) || 45 === e)) {
              if (88 === (r = O(u, 2)) || 120 === r) return NaN;
            } else if (48 === e) {
              switch (O(u, 1)) {
                case 66:
                case 98:
                  (n = 2), (o = 49);
                  break;
                case 79:
                case 111:
                  (n = 8), (o = 55);
                  break;
                default:
                  return +u;
              }
              for (a = (i = x(u, 2)).length, s = 0; s < a; s++)
                if ((c = O(i, s)) < 48 || c > o) return NaN;
              return parseInt(i, n);
            }
          return +u;
        },
        I = u(S, !w(" 0o1") || !w("0b1") || w("+0x1")),
        C = function (t) {
          var e,
            r =
              arguments.length < 1
                ? 0
                : w(
                    (function (t) {
                      var e = d(t, "number");
                      return "bigint" == typeof e ? e : k(e);
                    })(t)
                  );
          return f(E, (e = this)) &&
            m(function () {
              g(e);
            })
            ? p(Object(r), this, C)
            : r;
        };
      (C.prototype = E),
        I && !o && (E.constructor = C),
        n({ global: !0, constructor: !0, wrap: !0, forced: I }, { Number: C });
      var N = function (t, e) {
        for (
          var r,
            n = i
              ? v(e)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(
                  ","
                ),
            o = 0;
          n.length > o;
          o++
        )
          l(e, (r = n[o])) && !l(t, r) && y(t, r, b(e, r));
      };
      o && A && N(s[S], A), (I || o) && N(s[S], w);
    },
    29896034: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(30537861).entries;
      n(
        { target: "Object", stat: !0 },
        {
          entries: function (t) {
            return o(t);
          },
        }
      );
    },
    95440747: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(17964319),
        i = r(86022357),
        a = r(37441603).f,
        s = r(97881036);
      n(
        {
          target: "Object",
          stat: !0,
          forced:
            !s ||
            o(function () {
              a(1);
            }),
          sham: !s,
        },
        {
          getOwnPropertyDescriptor: function (t, e) {
            return a(i(t), e);
          },
        }
      );
    },
    20037566: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(97881036),
        i = r(59264791),
        a = r(86022357),
        s = r(37441603),
        c = r(74893328);
      n(
        { target: "Object", stat: !0, sham: !o },
        {
          getOwnPropertyDescriptors: function (t) {
            for (
              var e, r, n = a(t), o = s.f, u = i(n), l = {}, p = 0;
              u.length > p;

            )
              void 0 !== (r = o(n, (e = u[p++]))) && c(l, e, r);
            return l;
          },
        }
      );
    },
    38235693: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(8401231),
        i = r(17964319),
        a = r(38659413),
        s = r(39045557);
      n(
        {
          target: "Object",
          stat: !0,
          forced:
            !o ||
            i(function () {
              a.f(1);
            }),
        },
        {
          getOwnPropertySymbols: function (t) {
            var e = a.f;
            return e ? e(s(t)) : [];
          },
        }
      );
    },
    69994507: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(17964319),
        i = r(39045557),
        a = r(2003331),
        s = r(92989875);
      n(
        {
          target: "Object",
          stat: !0,
          forced: o(function () {
            a(1);
          }),
          sham: !s,
        },
        {
          getPrototypeOf: function (t) {
            return a(i(t));
          },
        }
      );
    },
    53083784: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(39045557),
        i = r(45857120);
      n(
        {
          target: "Object",
          stat: !0,
          forced: r(17964319)(function () {
            i(1);
          }),
        },
        {
          keys: function (t) {
            return i(o(t));
          },
        }
      );
    },
    1906035: (t, e, r) => {
      "use strict";
      var n = r(10578092),
        o = r(17917960),
        i = r(45910715);
      n || o(Object.prototype, "toString", i, { unsafe: !0 });
    },
    96949634: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(30537861).values;
      n(
        { target: "Object", stat: !0 },
        {
          values: function (t) {
            return o(t);
          },
        }
      );
    },
    73811923: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(82185277),
        i = r(45031050),
        a = r(77483563),
        s = r(58747087),
        c = r(66670348);
      n(
        { target: "Promise", stat: !0, forced: r(17211977) },
        {
          all: function (t) {
            var e = this,
              r = a.f(e),
              n = r.resolve,
              u = r.reject,
              l = s(function () {
                var r = i(e.resolve),
                  a = [],
                  s = 0,
                  l = 1;
                c(t, function (t) {
                  var i = s++,
                    c = !1;
                  l++,
                    o(r, e, t).then(function (t) {
                      c || ((c = !0), (a[i] = t), --l || n(a));
                    }, u);
                }),
                  --l || n(a);
              });
            return l.error && u(l.value), r.promise;
          },
        }
      );
    },
    66833747: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(13599787),
        i = r(95074756).CONSTRUCTOR,
        a = r(34330246),
        s = r(60033783),
        c = r(6295189),
        u = r(17917960),
        l = a && a.prototype;
      if (
        (n(
          { target: "Promise", proto: !0, forced: i, real: !0 },
          {
            catch: function (t) {
              return this.then(void 0, t);
            },
          }
        ),
        !o && c(a))
      ) {
        var p = s("Promise").prototype.catch;
        l.catch !== p && u(l, "catch", p, { unsafe: !0 });
      }
    },
    23487716: (t, e, r) => {
      "use strict";
      var n,
        o,
        i,
        a = r(33084182),
        s = r(13599787),
        c = r(61095617),
        u = r(95619008),
        l = r(82185277),
        p = r(17917960),
        f = r(15245319),
        h = r(73627903),
        d = r(21172241),
        m = r(45031050),
        v = r(6295189),
        b = r(75849826),
        y = r(60144823),
        g = r(84870901),
        _ = r(54442329).set,
        S = r(87823891),
        w = r(39187301),
        A = r(58747087),
        E = r(12565977),
        B = r(71814253),
        x = r(34330246),
        O = r(95074756),
        k = r(77483563),
        I = "Promise",
        C = O.CONSTRUCTOR,
        N = O.REJECTION_EVENT,
        P = O.SUBCLASSING,
        T = B.getterFor(I),
        j = B.set,
        D = x && x.prototype,
        V = x,
        G = D,
        R = u.TypeError,
        F = u.document,
        M = u.process,
        L = k.f,
        W = L,
        $ = !!(F && F.createEvent && u.dispatchEvent),
        U = "unhandledrejection",
        z = function (t) {
          var e;
          return !(!b(t) || !v((e = t.then))) && e;
        },
        q = function (t, e) {
          var r,
            n,
            o,
            i = e.value,
            a = 1 === e.state,
            s = a ? t.ok : t.fail,
            c = t.resolve,
            u = t.reject,
            p = t.domain;
          try {
            s
              ? (a || (2 === e.rejection && Q(e), (e.rejection = 1)),
                !0 === s
                  ? (r = i)
                  : (p && p.enter(), (r = s(i)), p && (p.exit(), (o = !0))),
                r === t.promise
                  ? u(new R("Promise-chain cycle"))
                  : (n = z(r))
                  ? l(n, r, c, u)
                  : c(r))
              : u(i);
          } catch (f) {
            p && !o && p.exit(), u(f);
          }
        },
        H = function (t, e) {
          t.notified ||
            ((t.notified = !0),
            S(function () {
              for (var r, n = t.reactions; (r = n.get()); ) q(r, t);
              (t.notified = !1), e && !t.rejection && X(t);
            }));
        },
        Y = function (t, e, r) {
          var n, o;
          $
            ? (((n = F.createEvent("Event")).promise = e),
              (n.reason = r),
              n.initEvent(t, !1, !0),
              u.dispatchEvent(n))
            : (n = { promise: e, reason: r }),
            !N && (o = u["on" + t])
              ? o(n)
              : t === U && w("Unhandled promise rejection", r);
        },
        X = function (t) {
          l(_, u, function () {
            var e,
              r = t.facade,
              n = t.value;
            if (
              K(t) &&
              ((e = A(function () {
                c ? M.emit("unhandledRejection", n, r) : Y(U, r, n);
              })),
              (t.rejection = c || K(t) ? 2 : 1),
              e.error)
            )
              throw e.value;
          });
        },
        K = function (t) {
          return 1 !== t.rejection && !t.parent;
        },
        Q = function (t) {
          l(_, u, function () {
            var e = t.facade;
            c
              ? M.emit("rejectionHandled", e)
              : Y("rejectionhandled", e, t.value);
          });
        },
        Z = function (t, e, r) {
          return function (n) {
            t(e, n, r);
          };
        },
        J = function (t, e, r) {
          t.done ||
            ((t.done = !0),
            r && (t = r),
            (t.value = e),
            (t.state = 2),
            H(t, !0));
        },
        tt = function (t, e, r) {
          if (!t.done) {
            (t.done = !0), r && (t = r);
            try {
              if (t.facade === e)
                throw new R("Promise can't be resolved itself");
              var n = z(e);
              n
                ? S(function () {
                    var r = { done: !1 };
                    try {
                      l(n, e, Z(tt, r, t), Z(J, r, t));
                    } catch (o) {
                      J(r, o, t);
                    }
                  })
                : ((t.value = e), (t.state = 1), H(t, !1));
            } catch (o) {
              J({ done: !1 }, o, t);
            }
          }
        };
      if (
        C &&
        ((G = (V = function (t) {
          y(this, G), m(t), l(n, this);
          var e = T(this);
          try {
            t(Z(tt, e), Z(J, e));
          } catch (r) {
            J(e, r);
          }
        }).prototype),
        ((n = function (t) {
          j(this, {
            type: I,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new E(),
            rejection: !1,
            state: 0,
            value: null,
          });
        }).prototype = p(G, "then", function (t, e) {
          var r = T(this),
            n = L(g(this, V));
          return (
            (r.parent = !0),
            (n.ok = !v(t) || t),
            (n.fail = v(e) && e),
            (n.domain = c ? M.domain : void 0),
            0 === r.state
              ? r.reactions.add(n)
              : S(function () {
                  q(n, r);
                }),
            n.promise
          );
        })),
        (o = function () {
          var t = new n(),
            e = T(t);
          (this.promise = t),
            (this.resolve = Z(tt, e)),
            (this.reject = Z(J, e));
        }),
        (k.f = L =
          function (t) {
            return t === V || undefined === t ? new o(t) : W(t);
          }),
        !s && v(x) && D !== Object.prototype)
      ) {
        (i = D.then),
          P ||
            p(
              D,
              "then",
              function (t, e) {
                var r = this;
                return new V(function (t, e) {
                  l(i, r, t, e);
                }).then(t, e);
              },
              { unsafe: !0 }
            );
        try {
          delete D.constructor;
        } catch (et) {}
        f && f(D, G);
      }
      a({ global: !0, constructor: !0, wrap: !0, forced: C }, { Promise: V }),
        h(V, I, !1, !0),
        d(I);
    },
    18515682: (t, e, r) => {
      "use strict";
      r(23487716),
        r(73811923),
        r(66833747),
        r(51104255),
        r(56600217),
        r(82575800);
    },
    51104255: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(82185277),
        i = r(45031050),
        a = r(77483563),
        s = r(58747087),
        c = r(66670348);
      n(
        { target: "Promise", stat: !0, forced: r(17211977) },
        {
          race: function (t) {
            var e = this,
              r = a.f(e),
              n = r.reject,
              u = s(function () {
                var a = i(e.resolve);
                c(t, function (t) {
                  o(a, e, t).then(r.resolve, n);
                });
              });
            return u.error && n(u.value), r.promise;
          },
        }
      );
    },
    56600217: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(77483563);
      n(
        { target: "Promise", stat: !0, forced: r(95074756).CONSTRUCTOR },
        {
          reject: function (t) {
            var e = o.f(this);
            return (0, e.reject)(t), e.promise;
          },
        }
      );
    },
    82575800: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(60033783),
        i = r(13599787),
        a = r(34330246),
        s = r(95074756).CONSTRUCTOR,
        c = r(70279166),
        u = o("Promise"),
        l = i && !s;
      n(
        { target: "Promise", stat: !0, forced: i || s },
        {
          resolve: function (t) {
            return c(l && this === u ? a : this, t);
          },
        }
      );
    },
    47138695: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(35761195);
      n({ target: "RegExp", proto: !0, forced: /./.exec !== o }, { exec: o });
    },
    92631386: (t, e, r) => {
      "use strict";
      r(47138695);
      var n,
        o,
        i = r(33084182),
        a = r(82185277),
        s = r(6295189),
        c = r(32189351),
        u = r(31678159),
        l =
          ((n = !1),
          ((o = /[ac]/).exec = function () {
            return (n = !0), /./.exec.apply(this, arguments);
          }),
          !0 === o.test("abc") && n),
        p = /./.test;
      i(
        { target: "RegExp", proto: !0, forced: !l },
        {
          test: function (t) {
            var e = c(this),
              r = u(t),
              n = e.exec;
            if (!s(n)) return a(p, e, r);
            var o = a(n, e, r);
            return null !== o && (c(o), !0);
          },
        }
      );
    },
    57886333: (t, e, r) => {
      "use strict";
      var n = r(63398638).PROPER,
        o = r(17917960),
        i = r(32189351),
        a = r(31678159),
        s = r(17964319),
        c = r(34818794),
        u = "toString",
        l = RegExp.prototype,
        p = l[u],
        f = s(function () {
          return "/a/b" !== p.call({ source: "a", flags: "b" });
        }),
        h = n && p.name !== u;
      (f || h) &&
        o(
          l,
          u,
          function () {
            var t = i(this);
            return "/" + a(t.source) + "/" + a(c(t));
          },
          { unsafe: !0 }
        );
    },
    4145753: (t, e, r) => {
      "use strict";
      var n,
        o = r(33084182),
        i = r(54892980),
        a = r(37441603).f,
        s = r(92625342),
        c = r(31678159),
        u = r(64403775),
        l = r(15389094),
        p = r(1691452),
        f = r(13599787),
        h = i("".slice),
        d = Math.min,
        m = p("endsWith");
      o(
        {
          target: "String",
          proto: !0,
          forced:
            !!(
              f ||
              m ||
              ((n = a(String.prototype, "endsWith")), !n || n.writable)
            ) && !m,
        },
        {
          endsWith: function (t) {
            var e = c(l(this));
            u(t);
            var r = arguments.length > 1 ? arguments[1] : void 0,
              n = e.length,
              o = void 0 === r ? n : d(s(r), n),
              i = c(t);
            return h(e, o - i.length, o) === i;
          },
        }
      );
    },
    47103817: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(92746832),
        i = r(34897786),
        a = RangeError,
        s = String.fromCharCode,
        c = String.fromCodePoint,
        u = o([].join);
      n(
        { target: "String", stat: !0, arity: 1, forced: !!c && 1 !== c.length },
        {
          fromCodePoint: function (t) {
            for (var e, r = [], n = arguments.length, o = 0; n > o; ) {
              if (((e = +arguments[o++]), i(e, 1114111) !== e))
                throw new a(e + " is not a valid code point");
              r[o] =
                e < 65536
                  ? s(e)
                  : s(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320);
            }
            return u(r, "");
          },
        }
      );
    },
    51524099: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(92746832),
        i = r(64403775),
        a = r(15389094),
        s = r(31678159),
        c = r(1691452),
        u = o("".indexOf);
      n(
        { target: "String", proto: !0, forced: !c("includes") },
        {
          includes: function (t) {
            return !!~u(
              s(a(this)),
              s(i(t)),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    32570708: (t, e, r) => {
      "use strict";
      var n = r(34745591).charAt,
        o = r(31678159),
        i = r(71814253),
        a = r(41197328),
        s = r(71577793),
        c = "String Iterator",
        u = i.set,
        l = i.getterFor(c);
      a(
        String,
        "String",
        function (t) {
          u(this, { type: c, string: o(t), index: 0 });
        },
        function () {
          var t,
            e = l(this),
            r = e.string,
            o = e.index;
          return o >= r.length
            ? s(void 0, !0)
            : ((t = n(r, o)), (e.index += t.length), s(t, !1));
        }
      );
    },
    27015936: (t, e, r) => {
      "use strict";
      var n = r(12020825),
        o = r(82185277),
        i = r(92746832),
        a = r(96355468),
        s = r(17964319),
        c = r(32189351),
        u = r(6295189),
        l = r(63139477),
        p = r(73390427),
        f = r(92625342),
        h = r(31678159),
        d = r(15389094),
        m = r(89301573),
        v = r(71242462),
        b = r(18610286),
        y = r(33707306),
        g = r(62248275)("replace"),
        _ = Math.max,
        S = Math.min,
        w = i([].concat),
        A = i([].push),
        E = i("".indexOf),
        B = i("".slice),
        x = function (t) {
          return void 0 === t ? t : String(t);
        },
        O = "$0" === "a".replace(/./, "$0"),
        k = !!/./[g] && "" === /./[g]("a", "$0");
      a(
        "replace",
        function (t, e, r) {
          var i = k ? "$" : "$0";
          return [
            function (t, r) {
              var n = d(this),
                i = l(t) ? void 0 : v(t, g);
              return i ? o(i, t, n, r) : o(e, h(n), t, r);
            },
            function (t, o) {
              var a = c(this),
                s = h(t);
              if ("string" == typeof o && -1 === E(o, i) && -1 === E(o, "$<")) {
                var l = r(e, a, s, o);
                if (l.done) return l.value;
              }
              var d = u(o);
              d || (o = h(o));
              var v,
                g = a.global;
              g && ((v = a.unicode), (a.lastIndex = 0));
              for (var O, k = []; null !== (O = y(a, s)) && (A(k, O), g); ) {
                "" === h(O[0]) && (a.lastIndex = m(s, f(a.lastIndex), v));
              }
              for (var I = "", C = 0, N = 0; N < k.length; N++) {
                for (
                  var P,
                    T = h((O = k[N])[0]),
                    j = _(S(p(O.index), s.length), 0),
                    D = [],
                    V = 1;
                  V < O.length;
                  V++
                )
                  A(D, x(O[V]));
                var G = O.groups;
                if (d) {
                  var R = w([T], D, j, s);
                  void 0 !== G && A(R, G), (P = h(n(o, void 0, R)));
                } else P = b(T, s, j, D, G, o);
                j >= C && ((I += B(s, C, j) + P), (C = j + T.length));
              }
              return I + B(s, C);
            },
          ];
        },
        !!s(function () {
          var t = /./;
          return (
            (t.exec = function () {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }) ||
          !O ||
          k
      );
    },
    66441449: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(95619008),
        i = r(82185277),
        a = r(92746832),
        s = r(13599787),
        c = r(97881036),
        u = r(8401231),
        l = r(17964319),
        p = r(26847425),
        f = r(43396857),
        h = r(32189351),
        d = r(86022357),
        m = r(88720361),
        v = r(31678159),
        b = r(71873636),
        y = r(4546008),
        g = r(45857120),
        _ = r(61698288),
        S = r(48290746),
        w = r(38659413),
        A = r(37441603),
        E = r(64767377),
        B = r(99338369),
        x = r(7545477),
        O = r(17917960),
        k = r(83560634),
        I = r(96365585),
        C = r(64510599),
        N = r(13101749),
        P = r(7593520),
        T = r(62248275),
        j = r(985631),
        D = r(76322287),
        V = r(253922),
        G = r(73627903),
        R = r(71814253),
        F = r(39485517).forEach,
        M = C("hidden"),
        L = "Symbol",
        W = "prototype",
        $ = R.set,
        U = R.getterFor(L),
        z = Object[W],
        q = o.Symbol,
        H = q && q[W],
        Y = o.RangeError,
        X = o.TypeError,
        K = o.QObject,
        Q = A.f,
        Z = E.f,
        J = S.f,
        tt = x.f,
        et = a([].push),
        rt = I("symbols"),
        nt = I("op-symbols"),
        ot = I("wks"),
        it = !K || !K[W] || !K[W].findChild,
        at = function (t, e, r) {
          var n = Q(z, e);
          n && delete z[e], Z(t, e, r), n && t !== z && Z(z, e, n);
        },
        st =
          c &&
          l(function () {
            return (
              7 !==
              y(
                Z({}, "a", {
                  get: function () {
                    return Z(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? at
            : Z,
        ct = function (t, e) {
          var r = (rt[t] = y(H));
          return (
            $(r, { type: L, tag: t, description: e }),
            c || (r.description = e),
            r
          );
        },
        ut = function (t, e, r) {
          t === z && ut(nt, e, r), h(t);
          var n = m(e);
          return (
            h(r),
            p(rt, n)
              ? (r.enumerable
                  ? (p(t, M) && t[M][n] && (t[M][n] = !1),
                    (r = y(r, { enumerable: b(0, !1) })))
                  : (p(t, M) || Z(t, M, b(1, y(null))), (t[M][n] = !0)),
                st(t, n, r))
              : Z(t, n, r)
          );
        },
        lt = function (t, e) {
          h(t);
          var r = d(e),
            n = g(r).concat(dt(r));
          return (
            F(n, function (e) {
              (c && !i(pt, r, e)) || ut(t, e, r[e]);
            }),
            t
          );
        },
        pt = function (t) {
          var e = m(t),
            r = i(tt, this, e);
          return (
            !(this === z && p(rt, e) && !p(nt, e)) &&
            (!(r || !p(this, e) || !p(rt, e) || (p(this, M) && this[M][e])) ||
              r)
          );
        },
        ft = function (t, e) {
          var r = d(t),
            n = m(e);
          if (r !== z || !p(rt, n) || p(nt, n)) {
            var o = Q(r, n);
            return (
              !o || !p(rt, n) || (p(r, M) && r[M][n]) || (o.enumerable = !0), o
            );
          }
        },
        ht = function (t) {
          var e = J(d(t)),
            r = [];
          return (
            F(e, function (t) {
              p(rt, t) || p(N, t) || et(r, t);
            }),
            r
          );
        },
        dt = function (t) {
          var e = t === z,
            r = J(e ? nt : d(t)),
            n = [];
          return (
            F(r, function (t) {
              !p(rt, t) || (e && !p(z, t)) || et(n, rt[t]);
            }),
            n
          );
        };
      u ||
        (O(
          (H = (q = function () {
            if (f(H, this)) throw new X("Symbol is not a constructor");
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? v(arguments[0])
                  : void 0,
              e = P(t),
              r = function (t) {
                var n = void 0 === this ? o : this;
                n === z && i(r, nt, t), p(n, M) && p(n[M], e) && (n[M][e] = !1);
                var a = b(1, t);
                try {
                  st(n, e, a);
                } catch (s) {
                  if (!(s instanceof Y)) throw s;
                  at(n, e, a);
                }
              };
            return c && it && st(z, e, { configurable: !0, set: r }), ct(e, t);
          })[W]),
          "toString",
          function () {
            return U(this).tag;
          }
        ),
        O(q, "withoutSetter", function (t) {
          return ct(P(t), t);
        }),
        (x.f = pt),
        (E.f = ut),
        (B.f = lt),
        (A.f = ft),
        (_.f = S.f = ht),
        (w.f = dt),
        (j.f = function (t) {
          return ct(T(t), t);
        }),
        c &&
          (k(H, "description", {
            configurable: !0,
            get: function () {
              return U(this).description;
            },
          }),
          s || O(z, "propertyIsEnumerable", pt, { unsafe: !0 }))),
        n(
          { global: !0, constructor: !0, wrap: !0, forced: !u, sham: !u },
          { Symbol: q }
        ),
        F(g(ot), function (t) {
          D(t);
        }),
        n(
          { target: L, stat: !0, forced: !u },
          {
            useSetter: function () {
              it = !0;
            },
            useSimple: function () {
              it = !1;
            },
          }
        ),
        n(
          { target: "Object", stat: !0, forced: !u, sham: !c },
          {
            create: function (t, e) {
              return void 0 === e ? y(t) : lt(y(t), e);
            },
            defineProperty: ut,
            defineProperties: lt,
            getOwnPropertyDescriptor: ft,
          }
        ),
        n(
          { target: "Object", stat: !0, forced: !u },
          { getOwnPropertyNames: ht }
        ),
        V(),
        G(q, L),
        (N[M] = !0);
    },
    53375191: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(97881036),
        i = r(95619008),
        a = r(92746832),
        s = r(26847425),
        c = r(6295189),
        u = r(43396857),
        l = r(31678159),
        p = r(83560634),
        f = r(87344268),
        h = i.Symbol,
        d = h && h.prototype;
      if (o && c(h) && (!("description" in d) || void 0 !== h().description)) {
        var m = {},
          v = function () {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : l(arguments[0]),
              e = u(d, this) ? new h(t) : void 0 === t ? h() : h(t);
            return "" === t && (m[e] = !0), e;
          };
        f(v, h), (v.prototype = d), (d.constructor = v);
        var b =
            "Symbol(description detection)" ===
            String(h("description detection")),
          y = a(d.valueOf),
          g = a(d.toString),
          _ = /^Symbol\((.*)\)[^)]+$/,
          S = a("".replace),
          w = a("".slice);
        p(d, "description", {
          configurable: !0,
          get: function () {
            var t = y(this);
            if (s(m, t)) return "";
            var e = g(t),
              r = b ? w(e, 7, -1) : S(e, _, "$1");
            return "" === r ? void 0 : r;
          },
        }),
          n({ global: !0, constructor: !0, forced: !0 }, { Symbol: v });
      }
    },
    95142: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(60033783),
        i = r(26847425),
        a = r(31678159),
        s = r(96365585),
        c = r(47427840),
        u = s("string-to-symbol-registry"),
        l = s("symbol-to-string-registry");
      n(
        { target: "Symbol", stat: !0, forced: !c },
        {
          for: function (t) {
            var e = a(t);
            if (i(u, e)) return u[e];
            var r = o("Symbol")(e);
            return (u[e] = r), (l[r] = e), r;
          },
        }
      );
    },
    73503923: (t, e, r) => {
      "use strict";
      r(76322287)("iterator");
    },
    29204099: (t, e, r) => {
      "use strict";
      r(66441449), r(95142), r(26691348), r(77276790), r(38235693);
    },
    26691348: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(26847425),
        i = r(93988325),
        a = r(71858391),
        s = r(96365585),
        c = r(47427840),
        u = s("symbol-to-string-registry");
      n(
        { target: "Symbol", stat: !0, forced: !c },
        {
          keyFor: function (t) {
            if (!i(t)) throw new TypeError(a(t) + " is not a symbol");
            if (o(u, t)) return u[t];
          },
        }
      );
    },
    35669252: (t, e, r) => {
      "use strict";
      var n = r(76322287),
        o = r(253922);
      n("toPrimitive"), o();
    },
    10827376: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(95619008),
        i = r(60144823),
        a = r(32189351),
        s = r(6295189),
        c = r(2003331),
        u = r(83560634),
        l = r(74893328),
        p = r(17964319),
        f = r(26847425),
        h = r(62248275),
        d = r(20837561).IteratorPrototype,
        m = r(97881036),
        v = r(13599787),
        b = "constructor",
        y = "Iterator",
        g = h("toStringTag"),
        _ = TypeError,
        S = o[y],
        w =
          v ||
          !s(S) ||
          S.prototype !== d ||
          !p(function () {
            S({});
          }),
        A = function () {
          if ((i(this, d), c(this) === d))
            throw new _("Abstract class Iterator not directly constructable");
        },
        E = function (t, e) {
          m
            ? u(d, t, {
                configurable: !0,
                get: function () {
                  return e;
                },
                set: function (e) {
                  if ((a(this), this === d))
                    throw new _("You can't redefine this property");
                  f(this, t) ? (this[t] = e) : l(this, t, e);
                },
              })
            : (d[t] = e);
        };
      f(d, g) || E(g, y),
        (!w && f(d, b) && d[b] !== Object) || E(b, A),
        (A.prototype = d),
        n({ global: !0, constructor: !0, forced: w }, { Iterator: A });
    },
    98920207: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(66670348),
        i = r(45031050),
        a = r(32189351),
        s = r(43259527);
      n(
        { target: "Iterator", proto: !0, real: !0 },
        {
          every: function (t) {
            a(this), i(t);
            var e = s(this),
              r = 0;
            return !o(
              e,
              function (e, n) {
                if (!t(e, r++)) return n();
              },
              { IS_RECORD: !0, INTERRUPTED: !0 }
            ).stopped;
          },
        }
      );
    },
    83722648: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(82185277),
        i = r(45031050),
        a = r(32189351),
        s = r(43259527),
        c = r(2098918),
        u = r(32010847),
        l = r(13599787),
        p = c(function () {
          for (
            var t, e, r = this.iterator, n = this.predicate, i = this.next;
            ;

          ) {
            if (((t = a(o(i, r))), (this.done = !!t.done))) return;
            if (((e = t.value), u(r, n, [e, this.counter++], !0))) return e;
          }
        });
      n(
        { target: "Iterator", proto: !0, real: !0, forced: l },
        {
          filter: function (t) {
            return a(this), i(t), new p(s(this), { predicate: t });
          },
        }
      );
    },
    69616513: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(66670348),
        i = r(45031050),
        a = r(32189351),
        s = r(43259527);
      n(
        { target: "Iterator", proto: !0, real: !0 },
        {
          find: function (t) {
            a(this), i(t);
            var e = s(this),
              r = 0;
            return o(
              e,
              function (e, n) {
                if (t(e, r++)) return n(e);
              },
              { IS_RECORD: !0, INTERRUPTED: !0 }
            ).result;
          },
        }
      );
    },
    21313645: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(66670348),
        i = r(45031050),
        a = r(32189351),
        s = r(43259527);
      n(
        { target: "Iterator", proto: !0, real: !0 },
        {
          forEach: function (t) {
            a(this), i(t);
            var e = s(this),
              r = 0;
            o(
              e,
              function (e) {
                t(e, r++);
              },
              { IS_RECORD: !0 }
            );
          },
        }
      );
    },
    13223918: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(49133897);
      n(
        { target: "Iterator", proto: !0, real: !0, forced: r(13599787) },
        { map: o }
      );
    },
    34318408: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(66670348),
        i = r(45031050),
        a = r(32189351),
        s = r(43259527),
        c = TypeError;
      n(
        { target: "Iterator", proto: !0, real: !0 },
        {
          reduce: function (t) {
            a(this), i(t);
            var e = s(this),
              r = arguments.length < 2,
              n = r ? void 0 : arguments[1],
              u = 0;
            if (
              (o(
                e,
                function (e) {
                  r ? ((r = !1), (n = e)) : (n = t(n, e, u)), u++;
                },
                { IS_RECORD: !0 }
              ),
              r)
            )
              throw new c("Reduce of empty iterator with no initial value");
            return n;
          },
        }
      );
    },
    58074670: (t, e, r) => {
      "use strict";
      var n = r(33084182),
        o = r(66670348),
        i = r(45031050),
        a = r(32189351),
        s = r(43259527);
      n(
        { target: "Iterator", proto: !0, real: !0 },
        {
          some: function (t) {
            a(this), i(t);
            var e = s(this),
              r = 0;
            return o(
              e,
              function (e, n) {
                if (t(e, r++)) return n();
              },
              { IS_RECORD: !0, INTERRUPTED: !0 }
            ).stopped;
          },
        }
      );
    },
    49684748: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(94191720),
        i = r(44313248),
        a = r(89176283),
        s = r(24415083),
        c = function (t) {
          if (t && t.forEach !== a)
            try {
              s(t, "forEach", a);
            } catch (e) {
              t.forEach = a;
            }
        };
      for (var u in o) o[u] && c(n[u] && n[u].prototype);
      c(i);
    },
    74018857: (t, e, r) => {
      "use strict";
      var n = r(95619008),
        o = r(94191720),
        i = r(44313248),
        a = r(62951728),
        s = r(24415083),
        c = r(73627903),
        u = r(62248275)("iterator"),
        l = a.values,
        p = function (t, e) {
          if (t) {
            if (t[u] !== l)
              try {
                s(t, u, l);
              } catch (n) {
                t[u] = l;
              }
            if ((c(t, e, !0), o[e]))
              for (var r in a)
                if (t[r] !== a[r])
                  try {
                    s(t, r, a[r]);
                  } catch (n) {
                    t[r] = a[r];
                  }
          }
        };
      for (var f in o) p(n[f] && n[f].prototype, f);
      p(i, "DOMTokenList");
    },
    85784678: (t, e, r) => {
      "use strict";
      r(62951728), r(47103817);
      var n = r(33084182),
        o = r(95619008),
        i = r(7937517),
        a = r(60033783),
        s = r(82185277),
        c = r(92746832),
        u = r(97881036),
        l = r(59897048),
        p = r(17917960),
        f = r(83560634),
        h = r(34507415),
        d = r(73627903),
        m = r(10648170),
        v = r(71814253),
        b = r(60144823),
        y = r(6295189),
        g = r(26847425),
        _ = r(22662608),
        S = r(15357275),
        w = r(32189351),
        A = r(75849826),
        E = r(31678159),
        B = r(4546008),
        x = r(71873636),
        O = r(3140833),
        k = r(29931715),
        I = r(71577793),
        C = r(69053340),
        N = r(62248275),
        P = r(88769624),
        T = N("iterator"),
        j = "URLSearchParams",
        D = j + "Iterator",
        V = v.set,
        G = v.getterFor(j),
        R = v.getterFor(D),
        F = i("fetch"),
        M = i("Request"),
        L = i("Headers"),
        W = M && M.prototype,
        $ = L && L.prototype,
        U = o.TypeError,
        z = o.encodeURIComponent,
        q = String.fromCharCode,
        H = a("String", "fromCodePoint"),
        Y = parseInt,
        X = c("".charAt),
        K = c([].join),
        Q = c([].push),
        Z = c("".replace),
        J = c([].shift),
        tt = c([].splice),
        et = c("".split),
        rt = c("".slice),
        nt = c(/./.exec),
        ot = /\+/g,
        it = /^[0-9a-f]+$/i,
        at = function (t, e) {
          var r = rt(t, e, e + 2);
          return nt(it, r) ? Y(r, 16) : NaN;
        },
        st = function (t) {
          for (var e = 0, r = 128; r > 0 && 0 !== (t & r); r >>= 1) e++;
          return e;
        },
        ct = function (t) {
          var e = null;
          switch (t.length) {
            case 1:
              e = t[0];
              break;
            case 2:
              e = ((31 & t[0]) << 6) | (63 & t[1]);
              break;
            case 3:
              e = ((15 & t[0]) << 12) | ((63 & t[1]) << 6) | (63 & t[2]);
              break;
            case 4:
              e =
                ((7 & t[0]) << 18) |
                ((63 & t[1]) << 12) |
                ((63 & t[2]) << 6) |
                (63 & t[3]);
          }
          return e > 1114111 ? null : e;
        },
        ut = function (t) {
          for (var e = (t = Z(t, ot, " ")).length, r = "", n = 0; n < e; ) {
            var o = X(t, n);
            if ("%" === o) {
              if ("%" === X(t, n + 1) || n + 3 > e) {
                (r += "%"), n++;
                continue;
              }
              var i = at(t, n + 1);
              if (i != i) {
                (r += o), n++;
                continue;
              }
              n += 2;
              var a = st(i);
              if (0 === a) o = q(i);
              else {
                if (1 === a || a > 4) {
                  (r += "�"), n++;
                  continue;
                }
                for (
                  var s = [i], c = 1;
                  c < a && !(++n + 3 > e || "%" !== X(t, n));

                ) {
                  var u = at(t, n + 1);
                  if (u != u) {
                    n += 3;
                    break;
                  }
                  if (u > 191 || u < 128) break;
                  Q(s, u), (n += 2), c++;
                }
                if (s.length !== a) {
                  r += "�";
                  continue;
                }
                var l = ct(s);
                null === l ? (r += "�") : (o = H(l));
              }
            }
            (r += o), n++;
          }
          return r;
        },
        lt = /[!'()~]|%20/g,
        pt = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
        },
        ft = function (t) {
          return pt[t];
        },
        ht = function (t) {
          return Z(z(t), lt, ft);
        },
        dt = m(
          function (t, e) {
            V(this, { type: D, target: G(t).entries, index: 0, kind: e });
          },
          j,
          function () {
            var t = R(this),
              e = t.target,
              r = t.index++;
            if (!e || r >= e.length) return (t.target = null), I(void 0, !0);
            var n = e[r];
            switch (t.kind) {
              case "keys":
                return I(n.key, !1);
              case "values":
                return I(n.value, !1);
            }
            return I([n.key, n.value], !1);
          },
          !0
        ),
        mt = function (t) {
          (this.entries = []),
            (this.url = null),
            void 0 !== t &&
              (A(t)
                ? this.parseObject(t)
                : this.parseQuery(
                    "string" == typeof t
                      ? "?" === X(t, 0)
                        ? rt(t, 1)
                        : t
                      : E(t)
                  ));
        };
      mt.prototype = {
        type: j,
        bindURL: function (t) {
          (this.url = t), this.update();
        },
        parseObject: function (t) {
          var e,
            r,
            n,
            o,
            i,
            a,
            c,
            u = this.entries,
            l = k(t);
          if (l)
            for (r = (e = O(t, l)).next; !(n = s(r, e)).done; ) {
              if (
                ((i = (o = O(w(n.value))).next),
                (a = s(i, o)).done || (c = s(i, o)).done || !s(i, o).done)
              )
                throw new U("Expected sequence with length 2");
              Q(u, { key: E(a.value), value: E(c.value) });
            }
          else for (var p in t) g(t, p) && Q(u, { key: p, value: E(t[p]) });
        },
        parseQuery: function (t) {
          if (t)
            for (
              var e, r, n = this.entries, o = et(t, "&"), i = 0;
              i < o.length;

            )
              (e = o[i++]).length &&
                ((r = et(e, "=")),
                Q(n, { key: ut(J(r)), value: ut(K(r, "=")) }));
        },
        serialize: function () {
          for (var t, e = this.entries, r = [], n = 0; n < e.length; )
            (t = e[n++]), Q(r, ht(t.key) + "=" + ht(t.value));
          return K(r, "&");
        },
        update: function () {
          (this.entries.length = 0), this.parseQuery(this.url.query);
        },
        updateURL: function () {
          this.url && this.url.update();
        },
      };
      var vt = function () {
          b(this, bt);
          var t = V(this, new mt(arguments.length > 0 ? arguments[0] : void 0));
          u || (this.size = t.entries.length);
        },
        bt = vt.prototype;
      if (
        (h(
          bt,
          {
            append: function (t, e) {
              var r = G(this);
              C(arguments.length, 2),
                Q(r.entries, { key: E(t), value: E(e) }),
                u || this.length++,
                r.updateURL();
            },
            delete: function (t) {
              for (
                var e = G(this),
                  r = C(arguments.length, 1),
                  n = e.entries,
                  o = E(t),
                  i = r < 2 ? void 0 : arguments[1],
                  a = void 0 === i ? i : E(i),
                  s = 0;
                s < n.length;

              ) {
                var c = n[s];
                if (c.key !== o || (void 0 !== a && c.value !== a)) s++;
                else if ((tt(n, s, 1), void 0 !== a)) break;
              }
              u || (this.size = n.length), e.updateURL();
            },
            get: function (t) {
              var e = G(this).entries;
              C(arguments.length, 1);
              for (var r = E(t), n = 0; n < e.length; n++)
                if (e[n].key === r) return e[n].value;
              return null;
            },
            getAll: function (t) {
              var e = G(this).entries;
              C(arguments.length, 1);
              for (var r = E(t), n = [], o = 0; o < e.length; o++)
                e[o].key === r && Q(n, e[o].value);
              return n;
            },
            has: function (t) {
              for (
                var e = G(this).entries,
                  r = C(arguments.length, 1),
                  n = E(t),
                  o = r < 2 ? void 0 : arguments[1],
                  i = void 0 === o ? o : E(o),
                  a = 0;
                a < e.length;

              ) {
                var s = e[a++];
                if (s.key === n && (void 0 === i || s.value === i)) return !0;
              }
              return !1;
            },
            set: function (t, e) {
              var r = G(this);
              C(arguments.length, 1);
              for (
                var n, o = r.entries, i = !1, a = E(t), s = E(e), c = 0;
                c < o.length;
                c++
              )
                (n = o[c]).key === a &&
                  (i ? tt(o, c--, 1) : ((i = !0), (n.value = s)));
              i || Q(o, { key: a, value: s }),
                u || (this.size = o.length),
                r.updateURL();
            },
            sort: function () {
              var t = G(this);
              P(t.entries, function (t, e) {
                return t.key > e.key ? 1 : -1;
              }),
                t.updateURL();
            },
            forEach: function (t) {
              for (
                var e,
                  r = G(this).entries,
                  n = _(t, arguments.length > 1 ? arguments[1] : void 0),
                  o = 0;
                o < r.length;

              )
                n((e = r[o++]).value, e.key, this);
            },
            keys: function () {
              return new dt(this, "keys");
            },
            values: function () {
              return new dt(this, "values");
            },
            entries: function () {
              return new dt(this, "entries");
            },
          },
          { enumerable: !0 }
        ),
        p(bt, T, bt.entries, { name: "entries" }),
        p(
          bt,
          "toString",
          function () {
            return G(this).serialize();
          },
          { enumerable: !0 }
        ),
        u &&
          f(bt, "size", {
            get: function () {
              return G(this).entries.length;
            },
            configurable: !0,
            enumerable: !0,
          }),
        d(vt, j),
        n({ global: !0, constructor: !0, forced: !l }, { URLSearchParams: vt }),
        !l && y(L))
      ) {
        var yt = c($.has),
          gt = c($.set),
          _t = function (t) {
            if (A(t)) {
              var e,
                r = t.body;
              if (S(r) === j)
                return (
                  (e = t.headers ? new L(t.headers) : new L()),
                  yt(e, "content-type") ||
                    gt(
                      e,
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ),
                  B(t, { body: x(0, E(r)), headers: x(0, e) })
                );
            }
            return t;
          };
        if (
          (y(F) &&
            n(
              { global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 },
              {
                fetch: function (t) {
                  return F(t, arguments.length > 1 ? _t(arguments[1]) : {});
                },
              }
            ),
          y(M))
        ) {
          var St = function (t) {
            return (
              b(this, W), new M(t, arguments.length > 1 ? _t(arguments[1]) : {})
            );
          };
          (W.constructor = St),
            (St.prototype = W),
            n(
              { global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 },
              { Request: St }
            );
        }
      }
      t.exports = { URLSearchParams: vt, getState: G };
    },
    76138123: (t, e, r) => {
      "use strict";
      var n = r(17917960),
        o = r(92746832),
        i = r(31678159),
        a = r(69053340),
        s = URLSearchParams,
        c = s.prototype,
        u = o(c.append),
        l = o(c.delete),
        p = o(c.forEach),
        f = o([].push),
        h = new s("a=1&a=2&b=3");
      h.delete("a", 1),
        h.delete("b", void 0),
        h + "" != "a=2" &&
          n(
            c,
            "delete",
            function (t) {
              var e = arguments.length,
                r = e < 2 ? void 0 : arguments[1];
              if (e && void 0 === r) return l(this, t);
              var n = [];
              p(this, function (t, e) {
                f(n, { key: e, value: t });
              }),
                a(e, 1);
              for (
                var o, s = i(t), c = i(r), h = 0, d = 0, m = !1, v = n.length;
                h < v;

              )
                (o = n[h++]),
                  m || o.key === s ? ((m = !0), l(this, o.key)) : d++;
              for (; d < v; )
                ((o = n[d++]).key === s && o.value === c) ||
                  u(this, o.key, o.value);
            },
            { enumerable: !0, unsafe: !0 }
          );
    },
    41181582: (t, e, r) => {
      "use strict";
      var n = r(17917960),
        o = r(92746832),
        i = r(31678159),
        a = r(69053340),
        s = URLSearchParams,
        c = s.prototype,
        u = o(c.getAll),
        l = o(c.has),
        p = new s("a=1");
      (!p.has("a", 2) && p.has("a", void 0)) ||
        n(
          c,
          "has",
          function (t) {
            var e = arguments.length,
              r = e < 2 ? void 0 : arguments[1];
            if (e && void 0 === r) return l(this, t);
            var n = u(this, t);
            a(e, 1);
            for (var o = i(r), s = 0; s < n.length; )
              if (n[s++] === o) return !0;
            return !1;
          },
          { enumerable: !0, unsafe: !0 }
        );
    },
    27045624: (t, e, r) => {
      "use strict";
      r(85784678);
    },
    60645153: (t, e, r) => {
      "use strict";
      var n = r(97881036),
        o = r(92746832),
        i = r(83560634),
        a = URLSearchParams.prototype,
        s = o(a.forEach);
      n &&
        !("size" in a) &&
        i(a, "size", {
          get: function () {
            var t = 0;
            return (
              s(this, function () {
                t++;
              }),
              t
            );
          },
          configurable: !0,
          enumerable: !0,
        });
    },
    5354671: (t, e, r) => {
      var n = r(19335835)(r(82032606), "DataView");
      t.exports = n;
    },
    61130922: (t, e, r) => {
      var n = r(92908105),
        o = r(10517953),
        i = r(61285672),
        a = r(13337212),
        s = r(19032588);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = s),
        (t.exports = c);
    },
    46893962: (t, e, r) => {
      var n = r(11923369),
        o = r(15322785),
        i = r(55023240),
        a = r(54577372),
        s = r(78732268);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = s),
        (t.exports = c);
    },
    70728218: (t, e, r) => {
      var n = r(19335835)(r(82032606), "Map");
      t.exports = n;
    },
    79444410: (t, e, r) => {
      var n = r(8589657),
        o = r(52674353),
        i = r(37318648),
        a = r(40295116),
        s = r(25646524);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = s),
        (t.exports = c);
    },
    9753061: (t, e, r) => {
      var n = r(19335835)(r(82032606), "Promise");
      t.exports = n;
    },
    73881024: (t, e, r) => {
      var n = r(19335835)(r(82032606), "Set");
      t.exports = n;
    },
    70563724: (t, e, r) => {
      var n = r(46893962),
        o = r(14687687),
        i = r(19328435),
        a = r(24688370),
        s = r(58362982),
        c = r(62071326);
      function u(t) {
        var e = (this.__data__ = new n(t));
        this.size = e.size;
      }
      (u.prototype.clear = o),
        (u.prototype.delete = i),
        (u.prototype.get = a),
        (u.prototype.has = s),
        (u.prototype.set = c),
        (t.exports = u);
    },
    61524242: (t, e, r) => {
      var n = r(82032606).Symbol;
      t.exports = n;
    },
    52730823: (t, e, r) => {
      var n = r(82032606).Uint8Array;
      t.exports = n;
    },
    79770790: (t, e, r) => {
      var n = r(19335835)(r(82032606), "WeakMap");
      t.exports = n;
    },
    85543360: (t) => {
      t.exports = function (t, e) {
        for (
          var r = -1, n = null == t ? 0 : t.length;
          ++r < n && !1 !== e(t[r], r, t);

        );
        return t;
      };
    },
    63172327: (t) => {
      t.exports = function (t, e) {
        for (
          var r = -1, n = null == t ? 0 : t.length, o = 0, i = [];
          ++r < n;

        ) {
          var a = t[r];
          e(a, r, t) && (i[o++] = a);
        }
        return i;
      };
    },
    84061110: (t, e, r) => {
      var n = r(63074649),
        o = r(10126675),
        i = r(2830678),
        a = r(98121357),
        s = r(28330304),
        c = r(13081850),
        u = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var r = i(t),
          l = !r && o(t),
          p = !r && !l && a(t),
          f = !r && !l && !p && c(t),
          h = r || l || p || f,
          d = h ? n(t.length, String) : [],
          m = d.length;
        for (var v in t)
          (!e && !u.call(t, v)) ||
            (h &&
              ("length" == v ||
                (p && ("offset" == v || "parent" == v)) ||
                (f &&
                  ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
                s(v, m))) ||
            d.push(v);
        return d;
      };
    },
    72932793: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
        return t;
      };
    },
    99776222: (t, e, r) => {
      var n = r(55160433),
        o = r(64297709),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r) {
        var a = t[e];
        (i.call(t, e) && o(a, r) && (void 0 !== r || e in t)) || n(t, e, r);
      };
    },
    74069386: (t, e, r) => {
      var n = r(64297709);
      t.exports = function (t, e) {
        for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
        return -1;
      };
    },
    88651434: (t, e, r) => {
      var n = r(68188184),
        o = r(29168923);
      t.exports = function (t, e) {
        return t && n(e, o(e), t);
      };
    },
    93620717: (t, e, r) => {
      var n = r(68188184),
        o = r(31902856);
      t.exports = function (t, e) {
        return t && n(e, o(e), t);
      };
    },
    55160433: (t, e, r) => {
      var n = r(36437300);
      t.exports = function (t, e, r) {
        "__proto__" == e && n
          ? n(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r);
      };
    },
    57881078: (t, e, r) => {
      var n = r(70563724),
        o = r(85543360),
        i = r(99776222),
        a = r(88651434),
        s = r(93620717),
        c = r(13881643),
        u = r(58385826),
        l = r(28870202),
        p = r(45339261),
        f = r(28361193),
        h = r(18803890),
        d = r(47909542),
        m = r(40252518),
        v = r(57731224),
        b = r(4366396),
        y = r(2830678),
        g = r(98121357),
        _ = r(42381329),
        S = r(36846860),
        w = r(73341479),
        A = r(29168923),
        E = r(31902856),
        B = "[object Arguments]",
        x = "[object Function]",
        O = "[object Object]",
        k = {};
      (k[B] =
        k["[object Array]"] =
        k["[object ArrayBuffer]"] =
        k["[object DataView]"] =
        k["[object Boolean]"] =
        k["[object Date]"] =
        k["[object Float32Array]"] =
        k["[object Float64Array]"] =
        k["[object Int8Array]"] =
        k["[object Int16Array]"] =
        k["[object Int32Array]"] =
        k["[object Map]"] =
        k["[object Number]"] =
        k[O] =
        k["[object RegExp]"] =
        k["[object Set]"] =
        k["[object String]"] =
        k["[object Symbol]"] =
        k["[object Uint8Array]"] =
        k["[object Uint8ClampedArray]"] =
        k["[object Uint16Array]"] =
        k["[object Uint32Array]"] =
          !0),
        (k["[object Error]"] = k[x] = k["[object WeakMap]"] = !1),
        (t.exports = function t(e, r, I, C, N, P) {
          var T,
            j = 1 & r,
            D = 2 & r,
            V = 4 & r;
          if ((I && (T = N ? I(e, C, N, P) : I(e)), void 0 !== T)) return T;
          if (!S(e)) return e;
          var G = y(e);
          if (G) {
            if (((T = m(e)), !j)) return u(e, T);
          } else {
            var R = d(e),
              F = R == x || "[object GeneratorFunction]" == R;
            if (g(e)) return c(e, j);
            if (R == O || R == B || (F && !N)) {
              if (((T = D || F ? {} : b(e)), !j))
                return D ? p(e, s(T, e)) : l(e, a(T, e));
            } else {
              if (!k[R]) return N ? e : {};
              T = v(e, R, j);
            }
          }
          P || (P = new n());
          var M = P.get(e);
          if (M) return M;
          P.set(e, T),
            w(e)
              ? e.forEach(function (n) {
                  T.add(t(n, r, I, n, e, P));
                })
              : _(e) &&
                e.forEach(function (n, o) {
                  T.set(o, t(n, r, I, o, e, P));
                });
          var L = G ? void 0 : (V ? (D ? h : f) : D ? E : A)(e);
          return (
            o(L || e, function (n, o) {
              L && (n = e[(o = n)]), i(T, o, t(n, r, I, o, e, P));
            }),
            T
          );
        });
    },
    41149443: (t, e, r) => {
      var n = r(36846860),
        o = Object.create,
        i = (function () {
          function t() {}
          return function (e) {
            if (!n(e)) return {};
            if (o) return o(e);
            t.prototype = e;
            var r = new t();
            return (t.prototype = void 0), r;
          };
        })();
      t.exports = i;
    },
    72497684: (t, e, r) => {
      var n = r(72932793),
        o = r(2830678);
      t.exports = function (t, e, r) {
        var i = e(t);
        return o(t) ? i : n(i, r(t));
      };
    },
    89585331: (t, e, r) => {
      var n = r(61524242),
        o = r(83878790),
        i = r(76075213),
        a = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(t)
          ? o(t)
          : i(t);
      };
    },
    36760315: (t, e, r) => {
      var n = r(89585331),
        o = r(77070691);
      t.exports = function (t) {
        return o(t) && "[object Arguments]" == n(t);
      };
    },
    42184585: (t, e, r) => {
      var n = r(47909542),
        o = r(77070691);
      t.exports = function (t) {
        return o(t) && "[object Map]" == n(t);
      };
    },
    89761816: (t, e, r) => {
      var n = r(4817367),
        o = r(13929815),
        i = r(36846860),
        a = r(47643842),
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        u = Object.prototype,
        l = c.toString,
        p = u.hasOwnProperty,
        f = RegExp(
          "^" +
            l
              .call(p)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!i(t) || o(t)) && (n(t) ? f : s).test(a(t));
      };
    },
    32981647: (t, e, r) => {
      var n = r(47909542),
        o = r(77070691);
      t.exports = function (t) {
        return o(t) && "[object Set]" == n(t);
      };
    },
    70567922: (t, e, r) => {
      var n = r(89585331),
        o = r(12322763),
        i = r(77070691),
        a = {};
      (a["[object Float32Array]"] =
        a["[object Float64Array]"] =
        a["[object Int8Array]"] =
        a["[object Int16Array]"] =
        a["[object Int32Array]"] =
        a["[object Uint8Array]"] =
        a["[object Uint8ClampedArray]"] =
        a["[object Uint16Array]"] =
        a["[object Uint32Array]"] =
          !0),
        (a["[object Arguments]"] =
          a["[object Array]"] =
          a["[object ArrayBuffer]"] =
          a["[object Boolean]"] =
          a["[object DataView]"] =
          a["[object Date]"] =
          a["[object Error]"] =
          a["[object Function]"] =
          a["[object Map]"] =
          a["[object Number]"] =
          a["[object Object]"] =
          a["[object RegExp]"] =
          a["[object Set]"] =
          a["[object String]"] =
          a["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return i(t) && o(t.length) && !!a[n(t)];
        });
    },
    35497891: (t, e, r) => {
      var n = r(61009522),
        o = r(3424489),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!n(t)) return o(t);
        var e = [];
        for (var r in Object(t))
          i.call(t, r) && "constructor" != r && e.push(r);
        return e;
      };
    },
    35522256: (t, e, r) => {
      var n = r(36846860),
        o = r(61009522),
        i = r(78452658),
        a = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!n(t)) return i(t);
        var e = o(t),
          r = [];
        for (var s in t)
          ("constructor" != s || (!e && a.call(t, s))) && r.push(s);
        return r;
      };
    },
    63074649: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      };
    },
    91889315: (t, e, r) => {
      var n = r(54729761),
        o = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, n(t) + 1).replace(o, "") : t;
      };
    },
    45186868: (t) => {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    39792530: (t, e, r) => {
      var n = r(52730823);
      t.exports = function (t) {
        var e = new t.constructor(t.byteLength);
        return new n(e).set(new n(t)), e;
      };
    },
    13881643: (t, e, r) => {
      t = r.nmd(t);
      var n = r(82032606),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        a = i && i.exports === o ? n.Buffer : void 0,
        s = a ? a.allocUnsafe : void 0;
      t.exports = function (t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = s ? s(r) : new t.constructor(r);
        return t.copy(n), n;
      };
    },
    79433408: (t, e, r) => {
      var n = r(39792530);
      t.exports = function (t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.byteLength);
      };
    },
    34045796: (t) => {
      var e = /\w*$/;
      t.exports = function (t) {
        var r = new t.constructor(t.source, e.exec(t));
        return (r.lastIndex = t.lastIndex), r;
      };
    },
    47360053: (t, e, r) => {
      var n = r(61524242),
        o = n ? n.prototype : void 0,
        i = o ? o.valueOf : void 0;
      t.exports = function (t) {
        return i ? Object(i.call(t)) : {};
      };
    },
    43267048: (t, e, r) => {
      var n = r(39792530);
      t.exports = function (t, e) {
        var r = e ? n(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length);
      };
    },
    58385826: (t) => {
      t.exports = function (t, e) {
        var r = -1,
          n = t.length;
        for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
        return e;
      };
    },
    68188184: (t, e, r) => {
      var n = r(99776222),
        o = r(55160433);
      t.exports = function (t, e, r, i) {
        var a = !r;
        r || (r = {});
        for (var s = -1, c = e.length; ++s < c; ) {
          var u = e[s],
            l = i ? i(r[u], t[u], u, r, t) : void 0;
          void 0 === l && (l = t[u]), a ? o(r, u, l) : n(r, u, l);
        }
        return r;
      };
    },
    28870202: (t, e, r) => {
      var n = r(68188184),
        o = r(24424155);
      t.exports = function (t, e) {
        return n(t, o(t), e);
      };
    },
    45339261: (t, e, r) => {
      var n = r(68188184),
        o = r(13840968);
      t.exports = function (t, e) {
        return n(t, o(t), e);
      };
    },
    24275998: (t, e, r) => {
      var n = r(82032606)["__core-js_shared__"];
      t.exports = n;
    },
    36437300: (t, e, r) => {
      var n = r(19335835),
        o = (function () {
          try {
            var t = n(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (e) {}
        })();
      t.exports = o;
    },
    65801495: (t, e, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = n;
    },
    28361193: (t, e, r) => {
      var n = r(72497684),
        o = r(24424155),
        i = r(29168923);
      t.exports = function (t) {
        return n(t, i, o);
      };
    },
    18803890: (t, e, r) => {
      var n = r(72497684),
        o = r(13840968),
        i = r(31902856);
      t.exports = function (t) {
        return n(t, i, o);
      };
    },
    93825980: (t, e, r) => {
      var n = r(63156603);
      t.exports = function (t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      };
    },
    19335835: (t, e, r) => {
      var n = r(89761816),
        o = r(53120283);
      t.exports = function (t, e) {
        var r = o(t, e);
        return n(r) ? r : void 0;
      };
    },
    46726752: (t, e, r) => {
      var n = r(9757270)(Object.getPrototypeOf, Object);
      t.exports = n;
    },
    83878790: (t, e, r) => {
      var n = r(61524242),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        var e = i.call(t, s),
          r = t[s];
        try {
          t[s] = void 0;
          var n = !0;
        } catch (c) {}
        var o = a.call(t);
        return n && (e ? (t[s] = r) : delete t[s]), o;
      };
    },
    24424155: (t, e, r) => {
      var n = r(63172327),
        o = r(70320618),
        i = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        s = a
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  n(a(t), function (e) {
                    return i.call(t, e);
                  }));
            }
          : o;
      t.exports = s;
    },
    13840968: (t, e, r) => {
      var n = r(72932793),
        o = r(46726752),
        i = r(24424155),
        a = r(70320618),
        s = Object.getOwnPropertySymbols
          ? function (t) {
              for (var e = []; t; ) n(e, i(t)), (t = o(t));
              return e;
            }
          : a;
      t.exports = s;
    },
    47909542: (t, e, r) => {
      var n = r(5354671),
        o = r(70728218),
        i = r(9753061),
        a = r(73881024),
        s = r(79770790),
        c = r(89585331),
        u = r(47643842),
        l = "[object Map]",
        p = "[object Promise]",
        f = "[object Set]",
        h = "[object WeakMap]",
        d = "[object DataView]",
        m = u(n),
        v = u(o),
        b = u(i),
        y = u(a),
        g = u(s),
        _ = c;
      ((n && _(new n(new ArrayBuffer(1))) != d) ||
        (o && _(new o()) != l) ||
        (i && _(i.resolve()) != p) ||
        (a && _(new a()) != f) ||
        (s && _(new s()) != h)) &&
        (_ = function (t) {
          var e = c(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? u(r) : "";
          if (n)
            switch (n) {
              case m:
                return d;
              case v:
                return l;
              case b:
                return p;
              case y:
                return f;
              case g:
                return h;
            }
          return e;
        }),
        (t.exports = _);
    },
    53120283: (t) => {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    92908105: (t, e, r) => {
      var n = r(33472961);
      t.exports = function () {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    10517953: (t) => {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    61285672: (t, e, r) => {
      var n = r(33472961),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (n) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return o.call(e, t) ? e[t] : void 0;
      };
    },
    13337212: (t, e, r) => {
      var n = r(33472961),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : o.call(e, t);
      };
    },
    19032588: (t, e, r) => {
      var n = r(33472961);
      t.exports = function (t, e) {
        var r = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    40252518: (t) => {
      var e = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var r = t.length,
          n = new t.constructor(r);
        return (
          r &&
            "string" == typeof t[0] &&
            e.call(t, "index") &&
            ((n.index = t.index), (n.input = t.input)),
          n
        );
      };
    },
    57731224: (t, e, r) => {
      var n = r(39792530),
        o = r(79433408),
        i = r(34045796),
        a = r(47360053),
        s = r(43267048);
      t.exports = function (t, e, r) {
        var c = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return n(t);
          case "[object Boolean]":
          case "[object Date]":
            return new c(+t);
          case "[object DataView]":
            return o(t, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return s(t, r);
          case "[object Map]":
          case "[object Set]":
            return new c();
          case "[object Number]":
          case "[object String]":
            return new c(t);
          case "[object RegExp]":
            return i(t);
          case "[object Symbol]":
            return a(t);
        }
      };
    },
    4366396: (t, e, r) => {
      var n = r(41149443),
        o = r(46726752),
        i = r(61009522);
      t.exports = function (t) {
        return "function" != typeof t.constructor || i(t) ? {} : n(o(t));
      };
    },
    28330304: (t) => {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, r) {
        var n = typeof t;
        return (
          !!(r = null == r ? 9007199254740991 : r) &&
          ("number" == n || ("symbol" != n && e.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < r
        );
      };
    },
    63156603: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    13929815: (t, e, r) => {
      var n,
        o = r(24275998),
        i = (n = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + n
          : "";
      t.exports = function (t) {
        return !!i && i in t;
      };
    },
    61009522: (t) => {
      var e = Object.prototype;
      t.exports = function (t) {
        var r = t && t.constructor;
        return t === (("function" == typeof r && r.prototype) || e);
      };
    },
    11923369: (t) => {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    15322785: (t, e, r) => {
      var n = r(74069386),
        o = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return (
          !(r < 0) &&
          (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, !0)
        );
      };
    },
    55023240: (t, e, r) => {
      var n = r(74069386);
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return r < 0 ? void 0 : e[r][1];
      };
    },
    54577372: (t, e, r) => {
      var n = r(74069386);
      t.exports = function (t) {
        return n(this.__data__, t) > -1;
      };
    },
    78732268: (t, e, r) => {
      var n = r(74069386);
      t.exports = function (t, e) {
        var r = this.__data__,
          o = n(r, t);
        return o < 0 ? (++this.size, r.push([t, e])) : (r[o][1] = e), this;
      };
    },
    8589657: (t, e, r) => {
      var n = r(61130922),
        o = r(46893962),
        i = r(70728218);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (i || o)(),
            string: new n(),
          });
      };
    },
    52674353: (t, e, r) => {
      var n = r(93825980);
      t.exports = function (t) {
        var e = n(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    37318648: (t, e, r) => {
      var n = r(93825980);
      t.exports = function (t) {
        return n(this, t).get(t);
      };
    },
    40295116: (t, e, r) => {
      var n = r(93825980);
      t.exports = function (t) {
        return n(this, t).has(t);
      };
    },
    25646524: (t, e, r) => {
      var n = r(93825980);
      t.exports = function (t, e) {
        var r = n(this, t),
          o = r.size;
        return r.set(t, e), (this.size += r.size == o ? 0 : 1), this;
      };
    },
    33472961: (t, e, r) => {
      var n = r(19335835)(Object, "create");
      t.exports = n;
    },
    3424489: (t, e, r) => {
      var n = r(9757270)(Object.keys, Object);
      t.exports = n;
    },
    78452658: (t) => {
      t.exports = function (t) {
        var e = [];
        if (null != t) for (var r in Object(t)) e.push(r);
        return e;
      };
    },
    22832866: (t, e, r) => {
      t = r.nmd(t);
      var n = r(65801495),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        a = i && i.exports === o && n.process,
        s = (function () {
          try {
            var t = i && i.require && i.require("util").types;
            return t || (a && a.binding && a.binding("util"));
          } catch (e) {}
        })();
      t.exports = s;
    },
    76075213: (t) => {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    9757270: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return t(e(r));
        };
      };
    },
    82032606: (t, e, r) => {
      var n = r(65801495),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
      t.exports = i;
    },
    14687687: (t, e, r) => {
      var n = r(46893962);
      t.exports = function () {
        (this.__data__ = new n()), (this.size = 0);
      };
    },
    19328435: (t) => {
      t.exports = function (t) {
        var e = this.__data__,
          r = e.delete(t);
        return (this.size = e.size), r;
      };
    },
    24688370: (t) => {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    58362982: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    62071326: (t, e, r) => {
      var n = r(46893962),
        o = r(70728218),
        i = r(79444410);
      t.exports = function (t, e) {
        var r = this.__data__;
        if (r instanceof n) {
          var a = r.__data__;
          if (!o || a.length < 199)
            return a.push([t, e]), (this.size = ++r.size), this;
          r = this.__data__ = new i(a);
        }
        return r.set(t, e), (this.size = r.size), this;
      };
    },
    47643842: (t) => {
      var e = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return e.call(t);
          } catch (r) {}
          try {
            return t + "";
          } catch (r) {}
        }
        return "";
      };
    },
    54729761: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)); );
        return r;
      };
    },
    43714350: (t, e, r) => {
      var n = r(57881078);
      t.exports = function (t) {
        return n(t, 4);
      };
    },
    3320368: (t, e, r) => {
      var n = r(36846860),
        o = r(76605055),
        i = r(9869171),
        a = Math.max,
        s = Math.min;
      t.exports = function (t, e, r) {
        var c,
          u,
          l,
          p,
          f,
          h,
          d = 0,
          m = !1,
          v = !1,
          b = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function y(e) {
          var r = c,
            n = u;
          return (c = u = void 0), (d = e), (p = t.apply(n, r));
        }
        function g(t) {
          var r = t - h;
          return void 0 === h || r >= e || r < 0 || (v && t - d >= l);
        }
        function _() {
          var t = o();
          if (g(t)) return S(t);
          f = setTimeout(
            _,
            (function (t) {
              var r = e - (t - h);
              return v ? s(r, l - (t - d)) : r;
            })(t)
          );
        }
        function S(t) {
          return (f = void 0), b && c ? y(t) : ((c = u = void 0), p);
        }
        function w() {
          var t = o(),
            r = g(t);
          if (((c = arguments), (u = this), (h = t), r)) {
            if (void 0 === f)
              return (function (t) {
                return (d = t), (f = setTimeout(_, e)), m ? y(t) : p;
              })(h);
            if (v) return clearTimeout(f), (f = setTimeout(_, e)), y(h);
          }
          return void 0 === f && (f = setTimeout(_, e)), p;
        }
        return (
          (e = i(e) || 0),
          n(r) &&
            ((m = !!r.leading),
            (l = (v = "maxWait" in r) ? a(i(r.maxWait) || 0, e) : l),
            (b = "trailing" in r ? !!r.trailing : b)),
          (w.cancel = function () {
            void 0 !== f && clearTimeout(f), (d = 0), (c = h = u = f = void 0);
          }),
          (w.flush = function () {
            return void 0 === f ? p : S(o());
          }),
          w
        );
      };
    },
    64297709: (t) => {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    10126675: (t, e, r) => {
      var n = r(36760315),
        o = r(77070691),
        i = Object.prototype,
        a = i.hasOwnProperty,
        s = i.propertyIsEnumerable,
        c = n(
          (function () {
            return arguments;
          })()
        )
          ? n
          : function (t) {
              return o(t) && a.call(t, "callee") && !s.call(t, "callee");
            };
      t.exports = c;
    },
    2830678: (t) => {
      var e = Array.isArray;
      t.exports = e;
    },
    29072369: (t, e, r) => {
      var n = r(4817367),
        o = r(12322763);
      t.exports = function (t) {
        return null != t && o(t.length) && !n(t);
      };
    },
    98121357: (t, e, r) => {
      t = r.nmd(t);
      var n = r(82032606),
        o = r(63943316),
        i = e && !e.nodeType && e,
        a = i && t && !t.nodeType && t,
        s = a && a.exports === i ? n.Buffer : void 0,
        c = (s ? s.isBuffer : void 0) || o;
      t.exports = c;
    },
    4817367: (t, e, r) => {
      var n = r(89585331),
        o = r(36846860);
      t.exports = function (t) {
        if (!o(t)) return !1;
        var e = n(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    12322763: (t) => {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    42381329: (t, e, r) => {
      var n = r(42184585),
        o = r(45186868),
        i = r(22832866),
        a = i && i.isMap,
        s = a ? o(a) : n;
      t.exports = s;
    },
    36846860: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    77070691: (t) => {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    73341479: (t, e, r) => {
      var n = r(32981647),
        o = r(45186868),
        i = r(22832866),
        a = i && i.isSet,
        s = a ? o(a) : n;
      t.exports = s;
    },
    44889043: (t, e, r) => {
      var n = r(89585331),
        o = r(77070691);
      t.exports = function (t) {
        return "symbol" == typeof t || (o(t) && "[object Symbol]" == n(t));
      };
    },
    13081850: (t, e, r) => {
      var n = r(70567922),
        o = r(45186868),
        i = r(22832866),
        a = i && i.isTypedArray,
        s = a ? o(a) : n;
      t.exports = s;
    },
    29168923: (t, e, r) => {
      var n = r(84061110),
        o = r(35497891),
        i = r(29072369);
      t.exports = function (t) {
        return i(t) ? n(t) : o(t);
      };
    },
    31902856: (t, e, r) => {
      var n = r(84061110),
        o = r(35522256),
        i = r(29072369);
      t.exports = function (t) {
        return i(t) ? n(t, !0) : o(t);
      };
    },
    76605055: (t, e, r) => {
      var n = r(82032606);
      t.exports = function () {
        return n.Date.now();
      };
    },
    70320618: (t) => {
      t.exports = function () {
        return [];
      };
    },
    63943316: (t) => {
      t.exports = function () {
        return !1;
      };
    },
    24559251: (t, e, r) => {
      var n = r(3320368),
        o = r(36846860);
      t.exports = function (t, e, r) {
        var i = !0,
          a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          o(r) &&
            ((i = "leading" in r ? !!r.leading : i),
            (a = "trailing" in r ? !!r.trailing : a)),
          n(t, e, { leading: i, maxWait: e, trailing: a })
        );
      };
    },
    9869171: (t, e, r) => {
      var n = r(91889315),
        o = r(36846860),
        i = r(44889043),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var r = s.test(t);
        return r || c.test(t) ? u(t.slice(2), r ? 2 : 8) : a.test(t) ? NaN : +t;
      };
    },
    12651039: (t, e, r) => {
      "use strict";
      r.d(e, {
        Aj: () => c,
        El: () => w,
        Em: () => E,
        G7: () => l,
        Kn: () => p,
        Li: () => v,
        OY: () => m,
        S2: () => N,
        UP: () => T,
        Uy: () => k,
        XK: () => B,
        Z4: () => h,
        Z5: () => j,
        Z8: () => S,
        ZA: () => d,
        a8: () => g,
        ai: () => a,
        eq: () => y,
        hG: () => f,
        hH: () => C,
        hi: () => s,
        i6: () => A,
        i8: () => _,
        iU: () => b,
        v0: () => O,
        vR: () => I,
        vb: () => x,
        w7: () => u,
        yh: () => P,
      });
      r(29204099),
        r(53375191),
        r(73503923),
        r(35669252),
        r(44381336),
        r(62951728),
        r(17522308),
        r(4421388),
        r(1906035),
        r(32570708),
        r(74018857);
      var n = r(97728409);
      function o(t) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          o(t)
        );
      }
      function i(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != o(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != o(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == o(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var a = r.n(n)()("sockets/crash"),
        s = {
          REGISTER_AS_USER: "Account",
          REGISTER_AS_GUEST: "Guest",
          RESULTS: "Results",
          BET: "Bet",
          CASHOUT: "Cashout",
          ACTIVITY: "Activity",
        },
        c = {
          ON_REGISTRATION: "OnRegistration",
          ON_STAGE: "OnStage",
          ON_BETTING: "OnBetting",
          ON_BET: "OnBet",
          ON_START: "OnStart",
          ON_BETS: "OnBets",
          ON_CASHOUTS: "OnCashouts",
          ON_CASHOUT: "OnCashout",
          ON_CRASH: "OnCrash",
          ON_RESULT: "OnResult",
          ON_BALANCE: "OnBalance",
        },
        u = {
          isPlanned: 0,
          isWaiting: 1,
          isAcceptingBets: 2,
          isStarted: 3,
          isEnded: 4,
          isClosed: 5,
        },
        l = i(
          i(i({}, u.isAcceptingBets, 15e3), u.isStarted, 37e3),
          u.isEnded,
          1e4
        ),
        p = { HANDS: 0, AUTO: 1 },
        f = 30,
        h = 18,
        d = 7,
        m = 1e3,
        v = 10,
        b = 2 * m,
        y = 2 * m,
        g = 9,
        _ = 5,
        S = 1.01,
        w = m / 20,
        A = { bottom: 0, left: 0, transform: -29 },
        E = 2,
        B = 3,
        x = 5e3,
        O = 35,
        k = 2500,
        I = 102329,
        C = 158224,
        N = 106011,
        P = 5e3,
        T = 2e3,
        j = 1.5;
    },
    64997642: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { component: () => Xt, manifests: () => Kt });
      var n = r(93630049);
      const o = JSON.parse(
        '{"images":{"icons-sprite.svg":"icons-sprite.0b139410803c.svg"}}'
      );
      var i = r(27335873),
        a = ["data-theme"],
        s = { class: "crash__wrap" },
        c = { class: "crash__header crash-header" },
        u = { class: "crash-btn__text crash-btn__text--size-s" },
        l = { class: "crash-btn__text crash-btn__text--size-s" },
        p = {
          key: 0,
          class: "crash-header__notification crash-header-notification",
        },
        f = { class: "crash-header-notification__text" },
        h = { class: "crash__main crash-game" },
        d = { class: "crash-game__coordinates" },
        m = {
          viewBox: "0 0 320 128",
          preserveAspectRatio: "xMinYMid meet",
          width: "320",
          height: "128",
          class: "crash-game__svg",
        },
        v = { key: 0, "clip-path": "url(#a)" },
        b = ["stroke", "d"],
        y = ["cx", "cy"],
        g = { key: 1, class: "crash-game__axis" },
        _ = { key: 0, class: "crash-game__counter" },
        S = { class: "crash-game__text" },
        w = { class: "crash-game__wrap" },
        A = { class: "crash-timer__counter" },
        E = { class: "crash-timer__segment" },
        B = { class: "crash-bet crash__bet" },
        x = { class: "crash-bet-info__text" },
        O = { key: 0, class: "crash-bet__error crash-bet-error" },
        k = ["aria-label", "title"],
        I = { class: "crash-bet-error__text" },
        C = { class: "crash-bet-info__text" };
      r(29204099),
        r(53375191),
        r(73503923),
        r(35669252),
        r(44381336),
        r(95723650),
        r(54660056),
        r(62951728),
        r(97200626),
        r(17522308),
        r(4421388),
        r(95440747),
        r(20037566),
        r(53083784),
        r(1906035),
        r(32570708),
        r(10827376),
        r(83722648),
        r(21313645),
        r(49684748),
        r(74018857);
      var N = r(3713828),
        P = r(25000323),
        T = r(97937907),
        j = r(43714350),
        D = r.n(j),
        V = r(519689),
        G = r(3505111),
        R = r(2646787),
        F = { class: "crash-popup crash-popup--players" },
        M = { class: "crash-popup__header" },
        L = { class: "crash-popup__col" },
        W = { class: "crash-popup__text crash-popup__text--size-m" },
        $ = {
          class:
            "crash-popup__text crash-popup__text--size-m crash-popup__text--bold",
        },
        U = { class: "crash-popup__col" },
        z = { class: "crash-popup__text crash-popup__text--size-m" },
        q = {
          class:
            "crash-popup__text crash-popup__text--size-m crash-popup__text--bold",
        },
        H = { class: "crash-popup__value" },
        Y = { class: "crash-popup__value" },
        X = { class: "crash-popup__col" },
        K = { class: "crash-popup__text crash-popup__text--size-m" },
        Q = {
          class:
            "crash-popup__text crash-popup__text--size-m crash-popup__text--bold",
        },
        Z = { class: "crash-popup__value" },
        J = { class: "crash-popup__value" },
        tt = { class: "crash-popup__overflow" },
        et = { class: "crash-popup__row crash-popup__row--head" },
        rt = { class: "crash-popup__td crash-popup__td--head" },
        nt = { class: "crash-popup__td crash-popup__td--head" },
        ot = { class: "crash-popup__td crash-popup__td--head" },
        it = { class: "crash-popup__td crash-popup__td--head" },
        at = { class: "crash-popup__td" },
        st = { class: "crash-popup__td" },
        ct = { class: "crash-popup__td" },
        ut = { class: "crash-popup__td" };
      const lt = {
        name: "CrashPlayersBoardMobile",
        extends: r(68124156).A,
        data: function () {
          return {
            consts: {
              ROW_CLASSES: {
                WIN: "crash-popup__row--win",
                LOSE: "crash-popup__row--loss",
                USER: "crash-popup__row--user",
              },
            },
          };
        },
      };
      var pt = r(58896881);
      const ft = (0, pt.A)(lt, [
        [
          "render",
          function (t, e, r, n, o, a) {
            return (
              (0, i.openBlock)(),
              (0, i.createElementBlock)("div", F, [
                (0, i.createElementVNode)("div", M, [
                  (0, i.createElementVNode)("div", L, [
                    (0, i.createElementVNode)(
                      "p",
                      W,
                      (0, i.toDisplayString)(t.$t("crash.totalValuePlayers")),
                      1
                    ),
                    (0, i.createElementVNode)("p", $, [
                      e[0] ||
                        (e[0] = (0, i.createElementVNode)(
                          "svg",
                          {
                            width: "13",
                            height: "15",
                            class: "crash-popup__ico crash-popup__ico--man",
                          },
                          [
                            (0, i.createElementVNode)("use", {
                              "xlink:href": "#man",
                            }),
                          ],
                          -1
                        )),
                      (0, i.createTextVNode)(
                        " " + (0, i.toDisplayString)(t.countAllPlayers),
                        1
                      ),
                    ]),
                  ]),
                  (0, i.createElementVNode)("div", U, [
                    (0, i.createElementVNode)(
                      "p",
                      z,
                      (0, i.toDisplayString)(t.$t("crash.totalValueBets")),
                      1
                    ),
                    (0, i.createElementVNode)("p", q, [
                      (0, i.createElementVNode)("span", H, [
                        e[1] ||
                          (e[1] = (0, i.createElementVNode)(
                            "svg",
                            {
                              width: "15",
                              height: "15",
                              class: "crash-popup__ico crash-popup__ico--coins",
                            },
                            [
                              (0, i.createElementVNode)("use", {
                                "xlink:href": "#coins",
                              }),
                            ],
                            -1
                          )),
                        (0, i.createTextVNode)(
                          " " +
                            (0, i.toDisplayString)(
                              " " + t.getAmountSum(t.betsAmount)
                            ),
                          1
                        ),
                      ]),
                      (0, i.createElementVNode)(
                        "span",
                        Y,
                        (0, i.toDisplayString)(t.computedCurrency),
                        1
                      ),
                    ]),
                  ]),
                  (0, i.createElementVNode)("div", X, [
                    (0, i.createElementVNode)(
                      "p",
                      K,
                      (0, i.toDisplayString)(t.$t("crash.totalWin")),
                      1
                    ),
                    (0, i.createElementVNode)("p", Q, [
                      (0, i.createElementVNode)("span", Z, [
                        e[2] ||
                          (e[2] = (0, i.createElementVNode)(
                            "svg",
                            {
                              width: "12",
                              height: "15",
                              class: "crash-popup__ico crash-popup__ico--money",
                            },
                            [
                              (0, i.createElementVNode)("use", {
                                "xlink:href": "#money",
                              }),
                            ],
                            -1
                          )),
                        (0, i.createTextVNode)(
                          " " +
                            (0, i.toDisplayString)(
                              " " + t.getAmountSum(t.totalGain)
                            ),
                          1
                        ),
                      ]),
                      (0, i.createElementVNode)(
                        "span",
                        J,
                        (0, i.toDisplayString)(t.computedCurrency),
                        1
                      ),
                    ]),
                  ]),
                ]),
                (0, i.createElementVNode)("div", tt, [
                  (0, i.createElementVNode)(
                    "div",
                    {
                      class: (0, i.normalizeClass)([
                        { scrollbar: t.notAllPlayersAreVisible },
                        "crash-popup__main",
                      ]),
                    },
                    [
                      (0, i.createElementVNode)("div", et, [
                        (0, i.createElementVNode)(
                          "p",
                          rt,
                          (0, i.toDisplayString)(t.$t("crash.resultsLogin")),
                          1
                        ),
                        (0, i.createElementVNode)(
                          "p",
                          nt,
                          (0, i.toDisplayString)(t.$t("common.coef")),
                          1
                        ),
                        (0, i.createElementVNode)(
                          "p",
                          ot,
                          (0, i.toDisplayString)(t.$t("common.bet")),
                          1
                        ),
                        (0, i.createElementVNode)(
                          "p",
                          it,
                          (0, i.toDisplayString)(t.$t("crash.resultsPrize")),
                          1
                        ),
                      ]),
                      (0, i.createElementVNode)(
                        "div",
                        {
                          class: (0, i.normalizeClass)([
                            {
                              "crash-popup__rows--less":
                                t.notAllPlayersAreVisible,
                            },
                            "crash-popup__rows",
                          ]),
                        },
                        [
                          ((0, i.openBlock)(!0),
                          (0, i.createElementBlock)(
                            i.Fragment,
                            null,
                            (0, i.renderList)(t.players, function (e) {
                              return (
                                (0, i.openBlock)(),
                                (0, i.createElementBlock)(
                                  "div",
                                  {
                                    key: e.id,
                                    class: (0, i.normalizeClass)([
                                      t.getRowClasses(e),
                                      "crash-popup__row",
                                    ]),
                                  },
                                  [
                                    (0, i.createElementVNode)(
                                      "p",
                                      at,
                                      (0, i.toDisplayString)(e.userId),
                                      1
                                    ),
                                    (0, i.createElementVNode)(
                                      "p",
                                      st,
                                      " x" +
                                        (0, i.toDisplayString)(e.coefficient),
                                      1
                                    ),
                                    (0, i.createElementVNode)(
                                      "p",
                                      ct,
                                      (0, i.toDisplayString)(
                                        t.getAmountSum(e.betAmount) +
                                          " " +
                                          t.computedCurrency
                                      ),
                                      1
                                    ),
                                    (0, i.createElementVNode)(
                                      "p",
                                      ut,
                                      (0, i.toDisplayString)(
                                        t.getAmountSum(e.winningAmount) +
                                          " " +
                                          t.computedCurrency
                                      ),
                                      1
                                    ),
                                  ],
                                  2
                                )
                              );
                            }),
                            128
                          )),
                        ],
                        2
                      ),
                    ],
                    2
                  ),
                ]),
              ])
            );
          },
        ],
      ]);
      var ht = ["title", "aria-label"],
        dt = { class: "crash-popup__header" },
        mt = { class: "crash-popup__title crash-popup__title--size-s" },
        vt = { class: "crash-popup__overflow" },
        bt = { class: "crash-popup__main scrollbar" },
        yt = { class: "crash-popup__rows" },
        gt = { key: 0, class: "crash-popup__empty crash-popup-empty" },
        _t = { class: "crash-popup-empty__text" },
        St = { class: "crash-popup__top" },
        wt = { class: "crash-popup__id" },
        At = { class: "crash-popup__td crash-popup__td--top" },
        Et = {
          class: "crash-popup__td crash-popup__td--top crash-popup__td--bold",
        },
        Bt = { class: "crash-popup__date" },
        xt = { class: "crash-popup__td crash-popup__td--top" },
        Ot = { class: "crash-popup__td crash-popup__td--top" },
        kt = { class: "crash-popup__content" },
        It = { class: "crash-popup__bet" },
        Ct = {
          class: "crash-popup__td crash-popup__td--head crash-popup__td--name",
        },
        Nt = { class: "crash-popup__td" },
        Pt = { class: "crash-popup__coef" },
        Tt = {
          class: "crash-popup__td crash-popup__td--head crash-popup__td--name",
        },
        jt = { class: "crash-popup__td" },
        Dt = { class: "crash-popup__win" },
        Vt = {
          class: "crash-popup__td crash-popup__td--head crash-popup__td--name",
        },
        Gt = { class: "crash-popup__td" },
        Rt = { class: "crash-popup__crash" },
        Ft = {
          class: "crash-popup__td crash-popup__td--head crash-popup__td--name",
        },
        Mt = { class: "crash-popup__td" };
      const Lt = {
        name: "CrashHistory",
        extends: r(1039594).A,
        props: { closePopup: { type: Function, default: function () {} } },
        methods: {
          getRowClass: function (t) {
            return t ? "crash-popup__row--win" : "crash-popup__row--loss";
          },
        },
      };
      var Wt = [
          { value: 1.2, transform: 93 },
          { value: 1.4, transform: 74 },
          { value: 1.6, transform: 55 },
          { value: 1.8, transform: 36 },
          { value: 2, transform: 17 },
        ],
        $t = [
          { value: 1, transform: 45 },
          { value: 2, transform: 110 },
          { value: 3, transform: 175 },
          { value: 4, transform: 240 },
          { value: 5, transform: 305 },
        ];
      function Ut(t) {
        return (
          (Ut =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Ut(t)
        );
      }
      function zt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function qt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? zt(Object(r), !0).forEach(function (e) {
                Ht(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : zt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Ht(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != Ut(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != Ut(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Ut(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const Yt = {
          components: {
            CrashPlayersBoard: ft,
            CrashHistory: (0, pt.A)(Lt, [
              [
                "render",
                function (t, e, r, n, o, a) {
                  return (
                    (0, i.openBlock)(),
                    (0, i.createElementBlock)(
                      "div",
                      {
                        class: (0, i.normalizeClass)([
                          {
                            "crash-popup--is-history-empty": !t.history.length,
                          },
                          "crash-popup crash-popup--history game-popup--mobile-v3",
                        ]),
                      },
                      [
                        (0, i.createElementVNode)(
                          "button",
                          {
                            onClick:
                              e[0] ||
                              (e[0] = function () {
                                return (
                                  r.closePopup &&
                                  r.closePopup.apply(r, arguments)
                                );
                              }),
                            title: t.$t("common.close"),
                            "aria-label": t.$t("common.close"),
                            class: "crash-popup__close",
                          },
                          null,
                          8,
                          ht
                        ),
                        (0, i.createElementVNode)("div", dt, [
                          (0, i.createElementVNode)("p", mt, [
                            e[1] ||
                              (e[1] = (0, i.createElementVNode)(
                                "svg",
                                {
                                  width: "15",
                                  height: "15",
                                  class:
                                    "crash-popup__ico crash-popup__ico--clock",
                                },
                                [
                                  (0, i.createElementVNode)("use", {
                                    "xlink:href": "#clock",
                                  }),
                                ],
                                -1
                              )),
                            (0, i.createTextVNode)(
                              " " +
                                (0, i.toDisplayString)(t.$t("crash.history")),
                              1
                            ),
                          ]),
                        ]),
                        (0, i.createElementVNode)("div", vt, [
                          (0, i.createElementVNode)("div", bt, [
                            (0, i.createElementVNode)("div", yt, [
                              t.history.length
                                ? (0, i.createCommentVNode)("", !0)
                                : ((0, i.openBlock)(),
                                  (0, i.createElementBlock)("div", gt, [
                                    e[2] ||
                                      (e[2] = (0, i.createElementVNode)(
                                        "svg",
                                        {
                                          width: "110",
                                          height: "95",
                                          class: "crash-popup-empty__ico",
                                        },
                                        [
                                          (0, i.createElementVNode)("use", {
                                            "xlink:href": "#empty-history",
                                          }),
                                        ],
                                        -1
                                      )),
                                    (0, i.createElementVNode)(
                                      "p",
                                      _t,
                                      (0, i.toDisplayString)(
                                        t.$t("crash.historyEmptyText")
                                      ),
                                      1
                                    ),
                                  ])),
                              ((0, i.openBlock)(!0),
                              (0, i.createElementBlock)(
                                i.Fragment,
                                null,
                                (0, i.renderList)(t.history, function (e) {
                                  return (
                                    (0, i.openBlock)(),
                                    (0, i.createElementBlock)(
                                      "div",
                                      {
                                        key: t.getKey(e),
                                        class: (0, i.normalizeClass)([
                                          a.getRowClass(e.winningAmount),
                                          "crash-popup__row",
                                        ]),
                                      },
                                      [
                                        (0, i.createElementVNode)("div", St, [
                                          (0, i.createElementVNode)("div", wt, [
                                            (0, i.createElementVNode)(
                                              "p",
                                              At,
                                              (0, i.toDisplayString)(
                                                t.$t("crash.roundId")
                                              ),
                                              1
                                            ),
                                            (0, i.createElementVNode)(
                                              "p",
                                              Et,
                                              (0, i.toDisplayString)(e.stageId),
                                              1
                                            ),
                                          ]),
                                          (0, i.createElementVNode)("div", Bt, [
                                            (0, i.createElementVNode)(
                                              "p",
                                              xt,
                                              (0, i.toDisplayString)(e.date),
                                              1
                                            ),
                                            (0, i.createElementVNode)(
                                              "p",
                                              Ot,
                                              (0, i.toDisplayString)(e.time),
                                              1
                                            ),
                                          ]),
                                        ]),
                                        (0, i.createElementVNode)("div", kt, [
                                          (0, i.createElementVNode)("div", It, [
                                            (0, i.createElementVNode)(
                                              "p",
                                              Ct,
                                              (0, i.toDisplayString)(
                                                t.$t("common.bet")
                                              ),
                                              1
                                            ),
                                            (0, i.createElementVNode)(
                                              "p",
                                              Nt,
                                              (0, i.toDisplayString)(
                                                t.getBetAmountWithCurrency(
                                                  e.balanceId,
                                                  e.betAmount
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          (0, i.createElementVNode)("div", Pt, [
                                            (0, i.createElementVNode)(
                                              "p",
                                              Tt,
                                              (0, i.toDisplayString)(
                                                t.$t("common.coef")
                                              ),
                                              1
                                            ),
                                            (0, i.createElementVNode)(
                                              "p",
                                              jt,
                                              " x" +
                                                (0, i.toDisplayString)(
                                                  e.userCoefficient
                                                ),
                                              1
                                            ),
                                          ]),
                                          (0, i.createElementVNode)("div", Dt, [
                                            (0, i.createElementVNode)(
                                              "p",
                                              Vt,
                                              (0, i.toDisplayString)(
                                                t.$t("crash.resultsPrize")
                                              ),
                                              1
                                            ),
                                            (0, i.createElementVNode)(
                                              "p",
                                              Gt,
                                              (0, i.toDisplayString)(
                                                t.getWinningAmountWithCurrency(
                                                  e.balanceId,
                                                  e.winningAmount
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          (0, i.createElementVNode)("div", Rt, [
                                            (0, i.createElementVNode)(
                                              "p",
                                              Ft,
                                              (0, i.toDisplayString)(
                                                t.$t("common.betGamesCrash")
                                              ),
                                              1
                                            ),
                                            (0, i.createElementVNode)(
                                              "p",
                                              Mt,
                                              " x" +
                                                (0, i.toDisplayString)(
                                                  e.crashCoefficient
                                                ),
                                              1
                                            ),
                                          ]),
                                        ]),
                                      ],
                                      2
                                    )
                                  );
                                }),
                                128
                              )),
                            ]),
                          ]),
                        ]),
                      ],
                      2
                    )
                  );
                },
              ],
            ]),
          },
          extends: R.A,
          mixins: [P.MobileShowBetsMixin, G.PopupMixin],
          data: function () {
            return {
              consts: {
                DEVIATION_TRANSFORM_COEFFS_LINE: 19,
                DEFAULT_TRANSFORM_COEFFS_LINE: 90,
                DEVIATION_TRANSFORM_TIME_LINE: 65,
                DEFAULT_TRANSFORM_TIME_LINE: 45,
                MAX_COUNT_OF_TIME_LINE: 5,
                DEFAULT_COEFFS_LINE: D()(Wt),
                DEFAULT_TIME_LINE: D()($t),
                popupStatus: { history: "history", players: "players" },
              },
              shownPopup: null,
              maskUrls: { grad: "", grad2: "", shadow: "" },
            };
          },
          computed: qt(
            qt({}, (0, N.mapGetters)("game", ["showSelectBonusAccounts"])),
            {},
            {
              isPopupHistory: function () {
                return this.shownPopup === this.consts.popupStatus.history;
              },
              isPopupPlayers: function () {
                return this.shownPopup === this.consts.popupStatus.players;
              },
              getStrokeCoordX2: function () {
                return 3 * this.pinPosition.left + 20;
              },
              getStrokeCoordY2: function () {
                return 128 - 1.28 * this.pinPosition.bottom - 20;
              },
              getStrokeShadow: function () {
                return "\n                    M15 107 Q"
                  .concat(
                    (this.getStrokeCoordX2 - 31) / 2,
                    "\n                    107 "
                  )
                  .concat(this.getStrokeCoordX2, "\n                    ")
                  .concat(this.getStrokeCoordY2, "\n                ");
              },
              getStrokeGrad2: function () {
                return "\n                    "
                  .concat(this.getStrokeShadow, "\n                    L")
                  .concat(this.getStrokeCoordX2, " 107 Z\n                ");
              },
            }
          ),
          methods: {
            openGamePopup: function (t) {
              T.bodyOverflowQueue.register(t), (this.shownPopup = t);
            },
            closeGamePopup: function () {
              T.bodyOverflowQueue.unregister(this.shownPopup),
                (this.shownPopup = null);
            },
            showHistoryPopup: function () {
              this.openGamePopup(this.consts.popupStatus.history);
            },
            getMaskUrl: function (t) {
              if (!this.maskUrls[t]) {
                var e = window.location.href;
                this.maskUrls[t] = "url(".concat(e, "#").concat(t, ")");
              }
              return this.maskUrls[t];
            },
            scrollToTop: function () {
              this.isMobileView &&
                !this.gameStarted &&
                (window.scroll(0, 0),
                V.iframeResizerBridge.execute("GPWebAppSetScrollState", {
                  isBlocked: !1,
                  scroll: 0,
                }));
            },
          },
        },
        Xt = (0, pt.A)(Yt, [
          [
            "render",
            function (t, e, r, n, o, N) {
              var P = (0, i.resolveComponent)("SvgShadowLayout"),
                T = (0, i.resolveComponent)("ResultNotification"),
                j = (0, i.resolveComponent)("BetField"),
                D = (0, i.resolveComponent)("BetFieldOld"),
                V = (0, i.resolveComponent)("AutoGamePopup"),
                G = (0, i.resolveComponent)("CrashPlayersBoard"),
                R = (0, i.resolveComponent)("CrashHistory");
              return (
                (0, i.openBlock)(),
                (0, i.createElementBlock)(
                  "div",
                  { class: "crash", "data-theme": t.currentTheme },
                  [
                    (0, i.createVNode)(P, {
                      svg: ["icons-sprite.svg", "loader.svg"],
                    }),
                    (0, i.createElementVNode)("div", s, [
                      (0, i.createElementVNode)(
                        "div",
                        {
                          class: (0, i.normalizeClass)([
                            { "crash__mountains--game": t.gameRunning },
                            "crash__mountains",
                          ]),
                        },
                        e[8] ||
                          (e[8] = [
                            (0, i.createStaticVNode)(
                              '<div class="crash__mountain crash__mountain--5"></div><div class="crash__mountain crash__mountain--4"></div><div class="crash__mountain crash__mountain--3"></div><div class="crash__mountain crash__mountain--2"></div><div class="crash__mountain crash__mountain--1"></div>',
                              5
                            ),
                          ]),
                        2
                      ),
                      (0, i.createElementVNode)("div", c, [
                        (0, i.createElementVNode)(
                          "button",
                          {
                            onClick:
                              e[0] ||
                              (e[0] = function (e) {
                                return t.showGameRulesPopup();
                              }),
                            "data-testid": "game-rules-btn",
                            class:
                              "crash-btn crash-btn--transparent crash-header__btn",
                          },
                          [
                            (0, i.createElementVNode)(
                              "span",
                              u,
                              (0, i.toDisplayString)(
                                t.$t("common.rulesWithSpaces")
                              ),
                              1
                            ),
                          ]
                        ),
                        (0, i.createElementVNode)(
                          "button",
                          {
                            onClick:
                              e[1] ||
                              (e[1] = function () {
                                return (
                                  N.showHistoryPopup &&
                                  N.showHistoryPopup.apply(N, arguments)
                                );
                              }),
                            "data-testid": "game-history-btn",
                            class:
                              "crash-btn crash-btn--gradient crash-header__btn",
                          },
                          [
                            e[9] ||
                              (e[9] = (0, i.createElementVNode)(
                                "svg",
                                {
                                  width: "11",
                                  height: "12",
                                  class: "crash-btn__ico crash-btn__ico--clock",
                                },
                                [
                                  (0, i.createElementVNode)("use", {
                                    "xlink:href": "#clock",
                                  }),
                                ],
                                -1
                              )),
                            (0, i.createElementVNode)(
                              "span",
                              l,
                              (0, i.toDisplayString)(t.$t("crash.history")),
                              1
                            ),
                          ]
                        ),
                        (0, i.createVNode)(
                          i.Transition,
                          { name: "fade" },
                          {
                            default: (0, i.withCtx)(function () {
                              return [
                                t.isNetworkTroubles
                                  ? ((0, i.openBlock)(),
                                    (0, i.createElementBlock)("div", p, [
                                      e[10] ||
                                        (e[10] = (0, i.createElementVNode)(
                                          "svg",
                                          {
                                            width: "24",
                                            height: "24",
                                            "aria-hidden": "true",
                                            class:
                                              "crash-header-notification__ico",
                                          },
                                          [
                                            (0, i.createElementVNode)("use", {
                                              "xlink:href": "#crash-internet",
                                            }),
                                          ],
                                          -1
                                        )),
                                      (0, i.createElementVNode)(
                                        "span",
                                        f,
                                        (0, i.toDisplayString)(
                                          t.$t("crash.networkTroubles")
                                        ),
                                        1
                                      ),
                                    ]))
                                  : (0, i.createCommentVNode)("", !0),
                              ];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                      (0, i.createElementVNode)("div", h, [
                        (0, i.createElementVNode)("div", d, [
                          (0, i.createElementVNode)(
                            "div",
                            {
                              class: (0, i.normalizeClass)([
                                {
                                  "crash-game__dots--is-active": t.gameRunning,
                                },
                                "crash-game__dots crash-game__dots--vertical",
                              ]),
                            },
                            null,
                            2
                          ),
                          (0, i.createElementVNode)(
                            "div",
                            {
                              class: (0, i.normalizeClass)([
                                {
                                  "crash-game__dots--is-active": t.gameRunning,
                                },
                                "crash-game__dots crash-game__dots--horizontal",
                              ]),
                            },
                            null,
                            2
                          ),
                        ]),
                        ((0, i.openBlock)(),
                        (0, i.createElementBlock)("svg", m, [
                          e[12] ||
                            (e[12] = (0, i.createStaticVNode)(
                              '<defs><filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#fff" flood-opacity="1"></feDropShadow></filter><filter id="shadow" x="-50%" y="-50%" width="200%" height="200%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.82 0 0 0 0 0.345 0 0 0 0 0.12 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><linearGradient id="grad" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFE400"></stop><stop offset="100%" stop-color="#C76404"></stop></linearGradient><linearGradient id="grad2" x1="100" y1="50" x2="100" y2="100" gradientUnits="userSpaceOnUse"><stop stop-color="#C1521E"></stop><stop offset="1" stop-color="#C1521E" stop-opacity="0"></stop></linearGradient></defs><g><path d="M15 88 h441" class="crash-game__grid"></path><path d="M15 69 h441" class="crash-game__grid"></path><path d="M15 50 h441" class="crash-game__grid"></path><path d="M15 31 h441" class="crash-game__grid"></path><path d="M15 12 h441" class="crash-game__grid"></path></g>',
                              2
                            )),
                          t.showRunningCoeff
                            ? ((0, i.openBlock)(),
                              (0, i.createElementBlock)("g", v, [
                                (0, i.createElementVNode)(
                                  "path",
                                  {
                                    stroke: N.getMaskUrl("grad"),
                                    d: N.getStrokeShadow,
                                    "stroke-width": "3",
                                    class: "crash-game__stroke",
                                  },
                                  null,
                                  8,
                                  b
                                ),
                                (0, i.createElementVNode)(
                                  "circle",
                                  {
                                    cx: N.getStrokeCoordX2,
                                    cy: N.getStrokeCoordY2,
                                    r: "4",
                                    fill: "#de8a06",
                                  },
                                  null,
                                  8,
                                  y
                                ),
                              ]))
                            : (0, i.createCommentVNode)("", !0),
                          e[13] ||
                            (e[13] = (0, i.createElementVNode)(
                              "clipPath",
                              { id: "a" },
                              [
                                (0, i.createElementVNode)("rect", {
                                  width: "305",
                                  height: "107",
                                  x: "15",
                                  y: "0",
                                  "stroke-width": "0",
                                }),
                              ],
                              -1
                            )),
                          t.showRunningCoeff
                            ? ((0, i.openBlock)(),
                              (0, i.createElementBlock)(
                                "g",
                                g,
                                e[11] ||
                                  (e[11] = [
                                    (0, i.createElementVNode)(
                                      "path",
                                      { d: "M15 0 v107" },
                                      null,
                                      -1
                                    ),
                                    (0, i.createElementVNode)(
                                      "path",
                                      { d: "M15 107 h441" },
                                      null,
                                      -1
                                    ),
                                  ])
                              ))
                            : (0, i.createCommentVNode)("", !0),
                        ])),
                        t.showRunningCoeff
                          ? ((0, i.openBlock)(),
                            (0, i.createElementBlock)(
                              "p",
                              _,
                              (0, i.toDisplayString)(t.runningCoeffValue) +
                                "x ",
                              1
                            ))
                          : (0, i.createCommentVNode)("", !0),
                        (0, i.createElementVNode)(
                          "div",
                          {
                            class: (0, i.normalizeClass)([
                              t.getWaitBetClass,
                              "crash-game__waiting",
                            ]),
                          },
                          [
                            e[14] ||
                              (e[14] = (0, i.createElementVNode)(
                                "div",
                                {
                                  class:
                                    "crash-game__pin crash-game__pin--waiting",
                                },
                                [
                                  (0, i.createElementVNode)("div", {
                                    class:
                                      "crash-game__shine crash-game__shine--waiting",
                                  }),
                                ],
                                -1
                              )),
                            (0, i.createElementVNode)(
                              "p",
                              S,
                              (0, i.toDisplayString)(t.$t("crash.waitingGame")),
                              1
                            ),
                          ],
                          2
                        ),
                        (0, i.createElementVNode)("div", w, [
                          t.showRunningCoeff
                            ? ((0, i.openBlock)(),
                              (0, i.createElementBlock)(
                                "div",
                                {
                                  key: 0,
                                  class: (0, i.normalizeClass)([
                                    {
                                      "crash-game__pin--crash": t.isCrashedGame,
                                    },
                                    "crash-game__pin",
                                  ]),
                                  style: (0, i.normalizeStyle)(t.getPinStyle),
                                },
                                null,
                                6
                              ))
                            : (0, i.createCommentVNode)("", !0),
                        ]),
                        (0, i.createVNode)(
                          T,
                          {
                            showBetAcceptedInfo: t.showBetAcceptedInfo,
                            resultsQueue: t.resultsQueue,
                            class: "crash-game__info",
                          },
                          null,
                          8,
                          ["showBetAcceptedInfo", "resultsQueue"]
                        ),
                        (0, i.withDirectives)(
                          (0, i.createElementVNode)(
                            "div",
                            {
                              class: (0, i.normalizeClass)([
                                {
                                  "crash-timer--countdown":
                                    t.timerInSeconds <= 6,
                                },
                                "crash-game__timer crash-timer",
                              ]),
                            },
                            [
                              (0, i.createElementVNode)(
                                "p",
                                A,
                                (0, i.toDisplayString)(t.timerInSeconds),
                                1
                              ),
                              e[15] ||
                                (e[15] = (0, i.createElementVNode)(
                                  "div",
                                  { class: "crash-timer__circle" },
                                  null,
                                  -1
                                )),
                              (0, i.createElementVNode)(
                                "div",
                                {
                                  style: (0, i.normalizeStyle)(t.getTimerStyle),
                                  class: "crash-timer__segments",
                                },
                                [
                                  ((0, i.openBlock)(),
                                  (0, i.createElementBlock)(
                                    i.Fragment,
                                    null,
                                    (0, i.renderList)(12, function (t) {
                                      return (0,
                                      i.createElementVNode)("div", E);
                                    }),
                                    64
                                  )),
                                ],
                                4
                              ),
                            ],
                            2
                          ),
                          [
                            [
                              i.vShow,
                              t.timerInSeconds && !t.gameRenderingStopped,
                            ],
                          ]
                        ),
                      ]),
                    ]),
                    (0, i.createElementVNode)("div", B, [
                      t.isFewBetsFeatureActive
                        ? ((0, i.openBlock)(),
                          (0, i.createElementBlock)(
                            i.Fragment,
                            { key: 0 },
                            [
                              (0, i.createVNode)(
                                i.Transition,
                                { name: "fade" },
                                {
                                  default: (0, i.withCtx)(function () {
                                    return [
                                      t.newToastNotificationText
                                        ? ((0, i.openBlock)(),
                                          (0, i.createElementBlock)(
                                            "div",
                                            {
                                              key: 0,
                                              class: (0, i.normalizeClass)([
                                                {
                                                  "crash-bet-info--is-error":
                                                    t.nextStageBetAlert
                                                      .isError ||
                                                    t.showErrorInfo,
                                                },
                                                "crash-bet__info crash-bet-info",
                                              ]),
                                            },
                                            [
                                              (0, i.createElementVNode)(
                                                "span",
                                                x,
                                                (0, i.toDisplayString)(
                                                  t.newToastNotificationText
                                                ),
                                                1
                                              ),
                                            ],
                                            2
                                          ))
                                        : (0, i.createCommentVNode)("", !0),
                                    ];
                                  }),
                                  _: 1,
                                }
                              ),
                              ((0, i.openBlock)(!0),
                              (0, i.createElementBlock)(
                                i.Fragment,
                                null,
                                (0, i.renderList)(
                                  t.disabledMakeBet,
                                  function (e, r) {
                                    return (
                                      (0, i.openBlock)(),
                                      (0, i.createBlock)(
                                        j,
                                        {
                                          key: r,
                                          onStartGame: function (e) {
                                            return t.onClickStartGame(r);
                                          },
                                          onTakeWin: function (e) {
                                            return t.takeWin(r);
                                          },
                                          onOpenAutoGamePopup: function (e) {
                                            return t.openAutoGamePopup(r);
                                          },
                                          onStopAutoGame: function (e) {
                                            return t.disableIsAutoGameEnabledWithEvent(
                                              r
                                            );
                                          },
                                          disabledMakeBet: e,
                                          betIndex: r,
                                        },
                                        null,
                                        8,
                                        [
                                          "onStartGame",
                                          "onTakeWin",
                                          "onOpenAutoGamePopup",
                                          "onStopAutoGame",
                                          "disabledMakeBet",
                                          "betIndex",
                                        ]
                                      )
                                    );
                                  }
                                ),
                                128
                              )),
                            ],
                            64
                          ))
                        : (0, i.createCommentVNode)("", !0),
                      t.isFewBetsFeatureActive
                        ? (0, i.createCommentVNode)("", !0)
                        : ((0, i.openBlock)(),
                          (0, i.createElementBlock)(
                            i.Fragment,
                            { key: 1 },
                            [
                              (0, i.createVNode)(
                                i.Transition,
                                { name: "fade" },
                                {
                                  default: (0, i.withCtx)(function () {
                                    return [
                                      t.showOldToastNotification
                                        ? ((0, i.openBlock)(),
                                          (0, i.createElementBlock)("div", O, [
                                            (0, i.createElementVNode)(
                                              "button",
                                              {
                                                onClick:
                                                  e[2] ||
                                                  (e[2] = function () {
                                                    return (
                                                      t.hideErrorInfo &&
                                                      t.hideErrorInfo.apply(
                                                        t,
                                                        arguments
                                                      )
                                                    );
                                                  }),
                                                "aria-label":
                                                  t.$t("common.close"),
                                                title: t.$t("common.close"),
                                                "data-testid":
                                                  "game-close-error-btn",
                                                class: "crash-bet-error__close",
                                              },
                                              null,
                                              8,
                                              k
                                            ),
                                            (0, i.createElementVNode)(
                                              "p",
                                              I,
                                              (0, i.toDisplayString)(
                                                t.oldToastNotificationText
                                              ),
                                              1
                                            ),
                                          ]))
                                        : (0, i.createCommentVNode)("", !0),
                                    ];
                                  }),
                                  _: 1,
                                }
                              ),
                              (0, i.createVNode)(
                                D,
                                {
                                  modelValue: t.isAutoBetTypeSelected,
                                  "onUpdate:modelValue":
                                    e[3] ||
                                    (e[3] = function (e) {
                                      return (t.isAutoBetTypeSelected = e);
                                    }),
                                  onStartGame:
                                    e[4] ||
                                    (e[4] = function (e) {
                                      return t.onClickStartGame(0);
                                    }),
                                  onTakeWin:
                                    e[5] ||
                                    (e[5] = function (e) {
                                      return t.takeWin(0);
                                    }),
                                  onStartAutoGame:
                                    e[6] ||
                                    (e[6] = function (e) {
                                      return t.startAutoGame(0);
                                    }),
                                  onStopAutoGame: t.stopAutoGame,
                                  prepareSumFunc: t.prepareSum,
                                  disabledMakeBet: t.disabledMakeBet[0],
                                  disabledMakeMainBet: t.disabledMakeMainBet[0],
                                },
                                null,
                                8,
                                [
                                  "modelValue",
                                  "onStopAutoGame",
                                  "prepareSumFunc",
                                  "disabledMakeBet",
                                  "disabledMakeMainBet",
                                ]
                              ),
                              (0, i.createVNode)(
                                i.Transition,
                                { name: "fade" },
                                {
                                  default: (0, i.withCtx)(function () {
                                    return [
                                      t.nextStageBetAlert.msg
                                        ? ((0, i.openBlock)(),
                                          (0, i.createElementBlock)(
                                            "div",
                                            {
                                              key: 0,
                                              class: (0, i.normalizeClass)([
                                                {
                                                  "crash-bet-info--is-error":
                                                    t.nextStageBetAlert.isError,
                                                },
                                                "crash-bet__info crash-bet-info",
                                              ]),
                                            },
                                            [
                                              (0, i.createElementVNode)(
                                                "span",
                                                C,
                                                (0, i.toDisplayString)(
                                                  t.nextStageBetAlert.msg
                                                ),
                                                1
                                              ),
                                            ],
                                            2
                                          ))
                                        : (0, i.createCommentVNode)("", !0),
                                    ];
                                  }),
                                  _: 1,
                                }
                              ),
                            ],
                            64
                          )),
                    ]),
                    (0, i.createVNode)(
                      i.Transition,
                      { name: "games-fade" },
                      {
                        default: (0, i.withCtx)(function () {
                          return [
                            t.showAutoGamePopup
                              ? ((0, i.openBlock)(),
                                (0, i.createBlock)(
                                  V,
                                  {
                                    key: 0,
                                    onClose: t.closeAutoGamePopup,
                                    onStartGame: t.startAutoGame,
                                    prepareSumFunc: t.prepareSum,
                                    betIndex: t.currentAutoBetIndex,
                                    showErrorInfo: t.showErrorInfo,
                                    errorInfo: t.autobetErrorInfo,
                                  },
                                  null,
                                  8,
                                  [
                                    "onClose",
                                    "onStartGame",
                                    "prepareSumFunc",
                                    "betIndex",
                                    "showErrorInfo",
                                    "errorInfo",
                                  ]
                                ))
                              : (0, i.createCommentVNode)("", !0),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                    (0, i.createVNode)(
                      G,
                      {
                        getAmountSum: function (e) {
                          return t.prepareSum(e);
                        },
                      },
                      null,
                      8,
                      ["getAmountSum"]
                    ),
                    (0, i.createVNode)(
                      i.Transition,
                      { name: "games-fade" },
                      {
                        default: (0, i.withCtx)(function () {
                          return [
                            N.isPopupHistory
                              ? ((0, i.openBlock)(),
                                (0, i.createElementBlock)(
                                  "div",
                                  {
                                    key: 0,
                                    ref: "popup",
                                    onClick:
                                      e[7] ||
                                      (e[7] = (0, i.withModifiers)(
                                        function () {
                                          return (
                                            N.closeGamePopup &&
                                            N.closeGamePopup.apply(N, arguments)
                                          );
                                        },
                                        ["self"]
                                      )),
                                    onclick: "void(0)",
                                    style: (0, i.normalizeStyle)(t.popupStyles),
                                    class: "crash-overlay",
                                  },
                                  [
                                    (0, i.createElementVNode)("div", null, [
                                      (0, i.createVNode)(
                                        R,
                                        { closePopup: N.closeGamePopup },
                                        null,
                                        8,
                                        ["closePopup"]
                                      ),
                                    ]),
                                  ],
                                  4
                                ))
                              : (0, i.createCommentVNode)("", !0),
                          ];
                        }),
                        _: 1,
                      }
                    ),
                  ],
                  8,
                  a
                )
              );
            },
          ],
        ]);
      var Kt = [n, o];
    },
    80901300: (t, e, r) => {
      "use strict";
      r.d(e, { uz: () => n });
      var n = (function (t) {
          return (
            (t[(t.Games = 1)] = "Games"),
            (t[(t.BonusGames = 2)] = "BonusGames"),
            (t[(t.LuckyWheel = 3)] = "LuckyWheel"),
            (t[(t.UserBonuses = 4)] = "UserBonuses"),
            (t[(t.Cashback = 5)] = "Cashback"),
            (t[(t.Jackpot = 8)] = "Jackpot"),
            (t[(t.DailyTournament = 9)] = "DailyTournament"),
            (t[(t.WeekReward = 10)] = "WeekReward"),
            (t[(t.SpaceAdventures = 11)] = "SpaceAdventures"),
            t
          );
        })({}),
        o =
          (r(29204099),
          r(53375191),
          r(44381336),
          r(95723650),
          r(4835009),
          r(69994507),
          r(1906035),
          r(18515682),
          r(10827376),
          r(69616513),
          r(97728409),
          r(73503923),
          r(35669252),
          r(62951728),
          r(17522308),
          r(4421388),
          r(32570708),
          r(74018857),
          r(70907507));
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          i(t)
        );
      }
      function a(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, s(n.key), n);
        }
      }
      function s(t) {
        var e = (function (t, e) {
          if ("object" != i(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != i(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == i(e) ? e : e + "";
      }
      new ((function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "fetchActivities",
              value: function () {
                return (0, o.configureGamesPreviewServiceApiClient)()(
                  "GetGamesActions"
                );
              },
            },
            {
              key: "fetchLandings",
              value: function () {
                return (0, o.configureGamesPreviewServiceApiClient)()(
                  "GetLandings"
                );
              },
            },
            {
              key: "fetchActionsWorkStatus",
              value: function (t) {
                return (0, o.configureGamesPreviewServiceApiClient)()({
                  url: "GetActionsWorkStatus",
                  params: { actionsIds: t },
                });
              },
            },
          ]) && a(t.prototype, e),
          r && a(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, r;
      })())();
    },
    84253374: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => a });
      r(29204099),
        r(53375191),
        r(44381336),
        r(69994507),
        r(1906035),
        r(18515682);
      function n() {
        var t,
          e,
          r = "function" == typeof Symbol ? Symbol : {},
          i = r.iterator || "@@iterator",
          a = r.toStringTag || "@@toStringTag";
        function s(r, n, i, a) {
          var s = n && n.prototype instanceof u ? n : u,
            l = Object.create(s.prototype);
          return (
            o(
              l,
              "_invoke",
              (function (r, n, o) {
                var i,
                  a,
                  s,
                  u = 0,
                  l = o || [],
                  p = !1,
                  f = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: h,
                    f: h.bind(t, 4),
                    d: function (e, r) {
                      return (i = e), (a = 0), (s = t), (f.n = r), c;
                    },
                  };
                function h(r, n) {
                  for (
                    a = r, s = n, e = 0;
                    !p && u && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      i = l[e],
                      h = f.p,
                      d = i[2];
                    r > 3
                      ? (o = d === n) &&
                        ((s = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                        (i[4] = i[5] = t))
                      : i[0] <= h &&
                        ((o = r < 2 && h < i[1])
                          ? ((a = 0), (f.v = n), (f.n = i[1]))
                          : h < d &&
                            (o = r < 3 || i[0] > n || n > d) &&
                            ((i[4] = r), (i[5] = n), (f.n = d), (a = 0)));
                  }
                  if (o || r > 1) return c;
                  throw ((p = !0), n);
                }
                return function (o, l, d) {
                  if (u > 1) throw TypeError("Generator is already running");
                  for (
                    p && 1 === l && h(l, d), a = l, s = d;
                    (e = a < 2 ? t : s) || !p;

                  ) {
                    i ||
                      (a
                        ? a < 3
                          ? (a > 1 && (f.n = -1), h(a, s))
                          : (f.n = s)
                        : (f.v = s));
                    try {
                      if (((u = 2), i)) {
                        if ((a || (o = "next"), (e = i[o]))) {
                          if (!(e = e.call(i, s)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          (s = e.value), a < 2 && (a = 0);
                        } else
                          1 === a && (e = i.return) && e.call(i),
                            a < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method"
                              )),
                              (a = 1));
                        i = t;
                      } else if ((e = (p = f.n < 0) ? s : r.call(n, f)) !== c)
                        break;
                    } catch (e) {
                      (i = t), (a = 1), (s = e);
                    } finally {
                      u = 1;
                    }
                  }
                  return { value: e, done: p };
                };
              })(r, i, a),
              !0
            ),
            l
          );
        }
        var c = {};
        function u() {}
        function l() {}
        function p() {}
        e = Object.getPrototypeOf;
        var f = [][i]
            ? e(e([][i]()))
            : (o((e = {}), i, function () {
                return this;
              }),
              e),
          h = (p.prototype = u.prototype = Object.create(f));
        function d(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, p)
              : ((t.__proto__ = p), o(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(h)),
            t
          );
        }
        return (
          (l.prototype = p),
          o(h, "constructor", p),
          o(p, "constructor", l),
          (l.displayName = "GeneratorFunction"),
          o(p, a, "GeneratorFunction"),
          o(h),
          o(h, a, "Generator"),
          o(h, i, function () {
            return this;
          }),
          o(h, "toString", function () {
            return "[object Generator]";
          }),
          (n = function () {
            return { w: s, m: d };
          })()
        );
      }
      function o(t, e, r, n) {
        var i = Object.defineProperty;
        try {
          i({}, "", {});
        } catch (t) {
          i = 0;
        }
        (o = function (t, e, r, n) {
          function a(e, r) {
            o(t, e, function (t) {
              return this._invoke(e, r, t);
            });
          }
          e
            ? i
              ? i(t, e, {
                  value: r,
                  enumerable: !n,
                  configurable: !n,
                  writable: !n,
                })
              : (t[e] = r)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          o(t, e, r, n);
      }
      function i(t, e, r, n, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, o);
      }
      const a = (function () {
        var t,
          e =
            ((t = n().m(function t(e) {
              return n().w(function (t) {
                for (;;)
                  if (0 === t.n)
                    return t.a(
                      2,
                      new Promise(function (t) {
                        setTimeout(t, e);
                      })
                    );
              }, t);
            })),
            function () {
              var e = this,
                r = arguments;
              return new Promise(function (n, o) {
                var a = t.apply(e, r);
                function s(t) {
                  i(a, n, o, s, c, "next", t);
                }
                function c(t) {
                  i(a, n, o, s, c, "throw", t);
                }
                s(void 0);
              });
            });
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    },
    6757310: (t, e, r) => {
      "use strict";
      r.d(e, { yx: () => h });
      var n = r(27335873);
      r(29204099),
        r(53375191),
        r(73503923),
        r(35669252),
        r(44381336),
        r(54660056),
        r(68090010),
        r(5320247),
        r(62951728),
        r(97200626),
        r(6137992),
        r(50473502),
        r(17522308),
        r(44422217),
        r(4421388),
        r(29896034),
        r(95440747),
        r(20037566),
        r(53083784),
        r(1906035),
        r(47138695),
        r(92631386),
        r(57886333),
        r(51524099),
        r(32570708),
        r(10827376),
        r(83722648),
        r(21313645),
        r(34318408),
        r(49684748),
        r(74018857);
      var o = r(3713828);
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          i(t)
        );
      }
      function a(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                i,
                a,
                s = [],
                c = !0,
                u = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (s.push(n.value), s.length !== e);
                    c = !0
                  );
              } catch (t) {
                (u = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return s(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(t)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? s(t, e)
                  : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(r), !0).forEach(function (e) {
                l(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function l(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != i(t) || !t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != i(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == i(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      const p = {
        name: "AdaptiveContainer",
        props: {
          sourceArea: {
            default: function () {
              return { width: 200, height: 200 };
            },
            type: Object,
          },
          parentSee: { type: Boolean, default: !1 },
          hasBlurBg: { type: Boolean, default: !1 },
          ratioMap: {
            default: function () {
              return {
                0: {
                  0: {
                    sourceArea: void 0,
                    targetArea: { x: 0, y: 0, width: 1, height: 1 },
                    zoomType: "upscale",
                    alignX: "center",
                    alignY: "middle",
                    elementsDescriptor: {},
                    enabledClasses: [],
                    disabledClasses: [],
                    visible: !0,
                  },
                },
              };
            },
            type: Object,
          },
        },
        emits: ["emitTransform"],
        data: function () {
          return { visible: !0 };
        },
        computed: u(
          u(
            u(
              {},
              (0, o.mapGetters)("application", [
                "isMobileView",
                "isDesktopView",
              ])
            ),
            (0, o.mapGetters)("bonuses", ["bonusId"])
          ),
          {},
          {
            currentRatioMap: function () {
              var t = Object.keys(this.ratioMap),
                e = t.includes("mobile") && this.isMobileView,
                r = t.includes("desktop") && this.isDesktopView;
              switch (!0) {
                case e:
                  return this.ratioMap.mobile;
                case r:
                  return this.ratioMap.desktop;
                case !t.includes("mobile") && !t.includes("desktop"):
                  return this.ratioMap;
                default:
                  return null;
              }
            },
            containerClasses: function () {
              return {
                "adaptive-container--desktop": this.isDesktopView,
                "adaptive-container--mobile": this.isMobileView,
                "adaptive-container--has-blur": this.hasBlurBg,
              };
            },
          }
        ),
        watch: {
          bonusId: function () {
            var t = this;
            this.$nextTick(function () {
              t.adjust();
            });
          },
        },
        mounted: function () {
          this.currentRatioMap &&
            (window.addEventListener("resize", this.adjust), this.adjust());
        },
        updated: function () {
          var t = this;
          this.currentRatioMap &&
            this.$nextTick().then(function () {
              return t.adjust();
            });
        },
        beforeUnmount: function () {
          this.currentRatioMap &&
            window.removeEventListener("resize", this.adjust);
        },
        methods: {
          getVisible: function (t) {
            var e;
            this.visible = null === (e = t.visible) || void 0 === e || e;
          },
          adjust: function () {
            var t,
              e,
              r,
              n,
              o,
              i,
              s = this.$refs.sourceElement,
              c = this.parentSee ? this.$el.parentNode : document.body,
              u = c.clientWidth,
              l = c.clientHeight,
              p = u / l || 1,
              f = Object.keys(this.currentRatioMap);
            if (0 !== f.length) {
              for (var h = f[0], d = 0; d < f.length; d++) {
                var m = f[d];
                if (p > parseFloat(m)) {
                  h = this.currentRatioMap[m];
                  break;
                }
              }
              var v = Object.keys(h).reduce(function (t, e, r) {
                  if (0 === r) return +e;
                  var n = +e;
                  return null !== t && n < u && n > t ? n : t;
                }, null),
                b = h[v];
              if (
                (this.hasBlurBg ||
                  (s.style.display = this.visible ? "grid" : "none"),
                this.getVisible(b),
                this.visible)
              ) {
                var y = b.targetArea,
                  g = null !== (t = b.enabledClasses) && void 0 !== t ? t : [],
                  _ = null !== (e = b.disabledClasses) && void 0 !== e ? e : [],
                  S =
                    null !== (r = b.elementsDescriptor) && void 0 !== r
                      ? r
                      : {},
                  w = null !== (n = b.zoomType) && void 0 !== n ? n : "upscale",
                  A = null !== (o = b.alignX) && void 0 !== o ? o : "center",
                  E = null !== (i = b.alignY) && void 0 !== i ? i : "middle",
                  B = u * y.width,
                  x = l * y.height,
                  O = b.sourceArea || this.$props.sourceArea,
                  k = O.width,
                  I = O.height;
                g.forEach(function (t) {
                  s.classList.add(t);
                }),
                  _.forEach(function (t) {
                    s.classList.remove(t);
                  }),
                  Object.entries(S).forEach(function (t) {
                    var e = a(t, 2),
                      r = e[0],
                      n = e[1],
                      o = document.getElementById(r);
                    Object.entries(n).forEach(function (t) {
                      var e = a(t, 2),
                        r = e[0],
                        n = e[1];
                      o.style[r] = n;
                    });
                  });
                var C = "upscale" === w ? 1 / 0 : 1,
                  N = Math.min(B / k, C),
                  P = Math.min(x / I, C);
                (N = "distortion" === w ? N : Math.min(N, P)),
                  (P = "distortion" === w ? P : N);
                var T = (u * y.width - k * N) / N,
                  j = (l * y.height - I * P) / P,
                  D = Math.trunc((y.x * u) / N),
                  V = Math.trunc((y.y * l) / P);
                switch (A) {
                  case "center":
                    D += T / 2;
                    break;
                  case "right":
                    D += T;
                }
                switch (E) {
                  case "middle":
                    V += j / 2;
                    break;
                  case "bottom":
                    V += j;
                }
                this.$emit("emitTransform", {
                  scaleX: N,
                  scaleY: P,
                  translateX: D,
                  translateY: V,
                }),
                  (s.style.transform =
                    "scaleX(" +
                    N +
                    ")scaleY(" +
                    P +
                    ")translateX(" +
                    D +
                    "px)translateY(" +
                    V +
                    "px)"),
                  (s.style.width = O.width + "px"),
                  (s.style.height = O.height + "px"),
                  (this.debug = {
                    sourceWidth: k,
                    sourceHeight: I,
                    targetHeight: x,
                    targetWidth: B,
                    scaleX: N,
                    scaleY: P,
                    parentWidth: u,
                    parentHeight: l,
                  });
              }
            }
          },
        },
      };
      var f = r(58896881);
      const h = (0, f.A)(p, [
        [
          "render",
          function (t, e, r, o, i, a) {
            return i.visible
              ? ((0, n.openBlock)(),
                (0, n.createElementBlock)(
                  "div",
                  {
                    key: 0,
                    ref: "sourceElement",
                    class: (0, n.normalizeClass)([
                      a.containerClasses,
                      "adaptive-container",
                    ]),
                  },
                  [(0, n.renderSlot)(t.$slots, "default", {}, void 0, !0)],
                  2
                ))
              : (0, n.createCommentVNode)("", !0);
          },
        ],
        ["__scopeId", "data-v-717b01bc"],
      ]);
      const d = r.p + "hand-hint.67d2aaa21045.png";
      Boolean;
    },
    93630049: (t) => {
      "use strict";
      t.exports = JSON.parse(
        '{"images":{"airplane-shine.png":"airplane-shine.aa885f9c2127.png","airplane.png":"airplane.dfbbc8b886fd.png","aitplane-crash.png":"aitplane-crash.e54114f0b2a9.png","loader.svg":"loader.61929ce25fdc.svg","mountain-1.svg":"mountain-1.ab33c8a2a170.svg","mountain-2.svg":"mountain-2.83e818c24d10.svg","mountain-3.svg":"mountain-3.e4410556c8d0.svg","mountain-4.svg":"mountain-4.1d63c9cb5f57.svg","mountain-5.svg":"mountain-5.eb0b5111981b.svg","mountain-6.png":"mountain-6.d4618f729ed6.png","mountains.png":"mountains.9b06e0aad5a2.png"}}'
      );
    },
  },
]);
