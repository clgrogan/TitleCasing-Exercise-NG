import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "titlecase", // the name is the keyword used to access the custom pipe
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string, maxLength?: number) {
    if (!value) return null;

    const actualLength = maxLength ? maxLength : 50;
    return value.substr(0, actualLength) + "...";
  }
}
