import React from "react";
import { shallow } from "enzyme";
import FetchStatus from "../FetchStatus";

describe("<FetchStatus />", () => {
    it("renders without crash", () => {
        const tree = shallow(
            <FetchStatus isError={false} isLoading={false} />
        );

        expect(tree).toMatchSnapshot();
    });

    it("renders <LoadingMessage /> if has loading status", () => {
        const component = shallow(<FetchStatus isError={false} isLoading />);

        expect(component.find("LoadingMessage")).toHaveLength(1);
    });

    it("renders <ErrorMessage /> if has error status", () => {
        const component = shallow(<FetchStatus isError isLoading={false} />);

        expect(component.find("ErrorMessage")).toHaveLength(1);
    });

    it("nothing renders if both props are falsy", () => {
        const component = shallow(
            <FetchStatus isError={false} isLoading={false} />
        );

        expect(component.type()).toEqual(null);
    });
});
