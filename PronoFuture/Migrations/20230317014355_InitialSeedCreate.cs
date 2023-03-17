using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PronoFuture.Migrations
{
    /// <inheritdoc />
    public partial class InitialSeedCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 0, 2, 2 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic" },
                values: new object[] { 0, 5 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 0, 0 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 0, 0, 0 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 1, 2, 3 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 4, 4, 0 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 7,
                column: "HostTeamGoalsPronostic",
                value: 1);

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 2, 2, 4 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 1, 4, 5 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 5, 1 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 11,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 5, 3 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic" },
                values: new object[] { 0, 5 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 13,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic" },
                values: new object[] { 3, 5 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 14,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic" },
                values: new object[] { 2, 3 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 15,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 2, 3, 1 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 16,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 2, 2 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 17,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 4, 4, 0 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 18,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 3, 3, 0 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 19,
                columns: new[] { "GoalsDifferencePronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 2, 2 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 20,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 4, 1 });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "GuestTeamGoals", "HostTeamGoals", "Winner" },
                values: new object[] { 2, 2, "Guest Team 1" });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 2,
                column: "GuestTeamGoals",
                value: 5);

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 3,
                column: "GuestTeamGoals",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "GuestTeamGoals", "HostTeamGoals" },
                values: new object[] { 1, 4 });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "GuestTeamGoals", "HostTeamGoals" },
                values: new object[] { 1, 0 });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "GuestTeamGoals", "HostTeamGoals" },
                values: new object[] { 4, 4 });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "GuestTeamGoals", "Winner" },
                values: new object[] { 5, "Guest Team 8" });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 9,
                column: "GuestTeamGoals",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "HostTeamGoals", "Winner" },
                values: new object[] { 3, "Host Team 10" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "RegistrationDate",
                value: new DateTime(2023, 3, 17, 3, 43, 55, 78, DateTimeKind.Local).AddTicks(7556));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "RegistrationDate",
                value: new DateTime(2023, 3, 17, 3, 43, 55, 78, DateTimeKind.Local).AddTicks(7612));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 2, 3, 5 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic" },
                values: new object[] { 2, 3 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 3, 3 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 1, 2, 1 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 2, 4, 2 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 1, 1, 2 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 7,
                column: "HostTeamGoalsPronostic",
                value: 5);

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 3, 4, 1 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 0, 2, 2 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 4, 0 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 11,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 2, 4 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic" },
                values: new object[] { 1, 4 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 13,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic" },
                values: new object[] { 0, 2 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 14,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic" },
                values: new object[] { 0, 1 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 15,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 1, 4, 5 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 16,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 3, 3 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 17,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 1, 2, 1 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 18,
                columns: new[] { "GoalsDifferencePronostic", "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 0, 2, 2 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 19,
                columns: new[] { "GoalsDifferencePronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 0, 4 });

            migrationBuilder.UpdateData(
                table: "MatchPronostics",
                keyColumn: "Id",
                keyValue: 20,
                columns: new[] { "GuestTeamGoalsPronostic", "HostTeamGoalsPronostic" },
                values: new object[] { 0, 3 });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "GuestTeamGoals", "HostTeamGoals", "Winner" },
                values: new object[] { 0, 3, "Host Team 1" });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 2,
                column: "GuestTeamGoals",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 3,
                column: "GuestTeamGoals",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "GuestTeamGoals", "HostTeamGoals" },
                values: new object[] { 0, 3 });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "GuestTeamGoals", "HostTeamGoals" },
                values: new object[] { 3, 1 });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "GuestTeamGoals", "HostTeamGoals" },
                values: new object[] { 1, 1 });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "GuestTeamGoals", "Winner" },
                values: new object[] { 2, "Host Team 8" });

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 9,
                column: "GuestTeamGoals",
                value: 0);

            migrationBuilder.UpdateData(
                table: "Matches",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "HostTeamGoals", "Winner" },
                values: new object[] { 1, "Guest Team 10" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "RegistrationDate",
                value: new DateTime(2023, 3, 17, 3, 41, 48, 894, DateTimeKind.Local).AddTicks(1341));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "RegistrationDate",
                value: new DateTime(2023, 3, 17, 3, 41, 48, 894, DateTimeKind.Local).AddTicks(1390));
        }
    }
}
