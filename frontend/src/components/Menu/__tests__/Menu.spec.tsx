import React from "react";
import { shallow } from "enzyme";
import { Menu } from "../Menu";

describe("<Menu />", () => {
    const onSignOut = jest.fn();
    const menu = [
        { name: "home", href: "#" },
        { name: "sale", href: "#" },
        { name: "handbags", href: "#" }
    ];

    it("renders without crash", () => {
        const tree = shallow(
            <Menu isAuthenticated={false} menu={menu} onSignOut={onSignOut} />
        );

        expect(tree).toMatchSnapshot();
    });

    it("renders nav with main-menu class if there are links list", () => {
        const component = shallow(
            <Menu isAuthenticated={false} menu={menu} onSignOut={onSignOut} />
        );

        expect(component.type()).toEqual("nav");
        expect(component.find("nav").hasClass("main-menu")).toBeTruthy();
    });

    it("doesn't render if there aren't links", () => {
        const component = shallow(
            <Menu isAuthenticated={false} menu={[]} onSignOut={onSignOut} />
        );

        expect(component.type()).toEqual(null);
    });
});
